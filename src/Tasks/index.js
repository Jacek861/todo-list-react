import "./style.css";

const Tasks = ({ tasks, hideDoneTasks, removeTask, toggleTaskDone }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li key={task.id}
        className={`tasks__item 
          ${task.done && hideDoneTasks
            ? "tasks__item--hidden"
            : ""}`
        }
      >
        <button
          className="task__button"
          onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✓" : ""}
        </button>
        <span className={
          `task__content ${task.done ? "task__content--done" : ""}`
        }>
          {task.content}
        </span>
        <button
          className="task__button task__button--remove"
          onClick={() => removeTask(task.id)}>
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;