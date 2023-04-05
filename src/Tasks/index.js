//import "./style.css";
import { StyledTasks, StyledTaskButton, StyledItem, StyledContent } from "./styled"

const Tasks = ({ tasks, hideDoneTasks, removeTask, toggleTaskDone }) => (
  <StyledTasks>
    {tasks.map(task => (
      <StyledItem
        key={task.id}
        hidden={task.done && hideDoneTasks}
      >
        <StyledTaskButton
          toggleDone
          onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✓" : ""}
        </StyledTaskButton>
        <StyledContent done={task.done}>
          {task.content}
        </StyledContent>
        <StyledTaskButton
          remove
          onClick={() => removeTask(task.id)}>
          🗑
        </StyledTaskButton>
      </StyledItem>
    ))}
  </StyledTasks>
);

export default Tasks;