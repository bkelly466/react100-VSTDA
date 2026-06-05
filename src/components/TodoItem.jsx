function TodoItem({ todo, updateTodo, deleteTodo }) {

  const priorityColors = {
    1: 'border-danger',  // Red
    2: 'border-warning', // Yellow
    3: 'border-success'  // Green
  };

  const borderColor = priorityColors[todo.priority] || 'border-secondary';

  return (
    <>
      <div className={`card mb-3 border-0 border-start ${borderColor} shadow-sm`}> 
        <div className="card-body d-flex justify-content-between align-items-center">
    
          <div className="d-flex align-items-center">
            <input type="checkbox" className="form-check-input me-3" />
            <span className="fw-semibold">{todo.text}</span>
          </div>

        <div>
          <button className="btn btn-sm btn-outline-primary me-2">
            Edit
          </button>
          <button className="btn btn-sm btn-outline-danger">
            Delete
          </button>
        </div>

        </div>
      </div>
    </>
  );
}

export default TodoItem;
