function TodoItem({ todo, updateTodo, deleteTodo }) {

  let borderColor = '';
  if (todo.priority === 1) {
    borderColor = '#dc3545'; // Bootstrap Danger (Red)
  } else if (todo.priority === 2) {
    borderColor = '#ffc107'; // Bootstrap Warning (Yellow)
  } else {
    borderColor = '#198754'; // Bootstrap Success (Green)
  }


  return (
    <li 
      className="list-group-item d-flex justify-content-between align-items-center mb-2 rounded border-start border-5 shadow-sm"
      style={{ borderLeftColor: borderColor }}>
      <div className="d-flex align-items-center gap-2">
        <input 
          className="form-check-input me-2" 
          type="checkbox" 
          id={`todo-check-${todo.id}`} 
        />
        <label className="form-check-label fw-medium text-dark" htmlFor={`todo-check-${todo.id}`}>
          {todo.text}
        </label>
      </div>
      
      <div className="btn-group" role="group">
        <button className="btn btn-sm btn-outline-secondary edit-todo" onClick={() => updateTodo(todo.id)}>
          Edit
        </button>
        <button className="btn btn-sm btn-outline-danger delete-todo" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
  </li>
  );
}

export default TodoItem;
