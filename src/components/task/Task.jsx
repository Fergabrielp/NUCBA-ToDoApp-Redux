import { TaskStyled } from "./TaskStyled";
import { ButtonStyled } from "../button/ButtonStyled";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/reducers/taskReducers/taskSlice";

const Task = ({ title, id }) => {
  const dispatch = useDispatch();

  return (
    <TaskStyled>
      <div>{title}</div>
      <ButtonStyled
        bg="#ff3d5a"
        bgh="#a02739"
        col="var(--text-white)"
        onClick={() => dispatch(deleteTask(id))}
      >
        Borrar
      </ButtonStyled>
    </TaskStyled>
  );
};

export default Task;
