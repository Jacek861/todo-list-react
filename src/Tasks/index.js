//import "./style.css";
import { StyledTasks, StyledTaskButton } from "./styled"

const Tasks = ({ tasks, hideDoneTasks, removeTask, toggleTaskDone }) => (
  <StyledTasks>
    {tasks.map(task => (
      <li key={task.id}
        className={`tasks__item 
          ${task.done && hideDoneTasks
            ? "tasks__item--hidden"
            : ""}`
        }
      >
        <StyledTaskButton
          onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✓" : ""}
        </StyledTaskButton>
        <span className={
          `task__content ${task.done ? "task__content--done" : ""}`
        }>
          {task.content}
        </span>
        <StyledTaskButton remove
          onClick={() => removeTask(task.id)}>
          🗑
        </StyledTaskButton>
      </li>
    ))}
  </StyledTasks>
);

export default Tasks;