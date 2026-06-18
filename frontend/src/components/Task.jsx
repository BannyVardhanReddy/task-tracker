export default function Task({ task, handleOnDelete, handleOnUpdate }) {
  return (
    <div className="task-card">
      <h4>{task.description.slice(0, 50)}</h4>
      <p style={{ color: task.isCompleted ? "green" : "red" }}>
        {task.isCompleted ? "Completed" : "Pending"}
      </p>

      <div className="btn">
        <button onClick={() => handleOnDelete(task._id)}>Delete</button>
        <button
          onClick={() => handleOnUpdate(task)}
          disabled={task.isCompleted}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
