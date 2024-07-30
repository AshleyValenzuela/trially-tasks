const TaskList = ({ tasks, onDelete, onUpdate }) => (
  <ul>
    {tasks.map((task) => (
      <li key={task.task_id}>
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.status}</p>
          <p>{task.due_date}</p>
          <button onClick={() => onUpdate(task)}>Edit</button>
          <button onClick={() => onDelete(task.task_id)}>Delete</button>
        </div>
      </li>
    ))}
  </ul>
);

export default TaskList;
