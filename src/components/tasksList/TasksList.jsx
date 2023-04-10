import { useSelector } from "react-redux";
import Task from "../task/Task";
import { TasksListStyled } from "./TasksListStyled";

const TasksList = () => {
  const { tasks } = useSelector((state) => state.task);

  return (
    <TasksListStyled>
      {tasks.map((task) => (
        <Task key={task.id} title={task.title} id={task.id} />
      ))}
    </TasksListStyled>
  );
};

export default TasksList;
