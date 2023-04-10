import { useState } from "react";
import { FormWrapper, HeaderWrapper, InputStyled } from "./HeaderStyled";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteAllTasks,
} from "../../redux/reducers/taskReducers/taskSlice";
import { ButtonStyled } from "../button/ButtonStyled";

const Header = () => {
  const [inputText, setInputText] = useState("");
  const [ids, setIds] = useState(0);
  const { tasks } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setIds(ids + 1);
      dispatch(addTask({ id: ids, title: inputText.trim() }));
      setInputText("");
      return;
    }
  };
  return (
    <HeaderWrapper>
      <FormWrapper onSubmit={handleAddTask}>
        <InputStyled
          type="text"
          value={inputText}
          onChange={handleChange}
          placeholder="Ingrese una tarea"
        />
        <ButtonStyled bg="#3b8c88" bgh="#2c6b68" col="var(--text-white)">
          Agregar
        </ButtonStyled>
      </FormWrapper>
      {tasks.length > 0 && (
        <ButtonStyled
          onClick={() => dispatch(deleteAllTasks())}
          bg="#ff3d5a"
          bgh="#a02739"
          col="var(--text-white)"
        >
          Borrar todo
        </ButtonStyled>
      )}
    </HeaderWrapper>
  );
};

export default Header;
