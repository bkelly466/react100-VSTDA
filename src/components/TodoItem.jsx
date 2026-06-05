function TodoItem({ todo, updateTodo, deleteTodo }) {
  return (
    <>
      <div className="card mb-3 border-start border-danger"> {/* or border-warning, border-success based on priority */}
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
