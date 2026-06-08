import React, { useState } from "react";

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [taskText, setTaskText] = useState(todo.text);
  const [priority, setPriority] = useState(todo.priority);

  // Determine both Bootstrap borders AND the exact priority strings the test suite checks for
  let priorityBorderClass = '';
  let testPriorityClass = '';

  if (todo.priority === 1) {
    priorityBorderClass = 'border-danger';
    testPriorityClass = 'priority-high';
  } else if (todo.priority === 2) {
    priorityBorderClass = 'border-warning';
    testPriorityClass = 'priority-medium';
  } else {
    priorityBorderClass = 'border-success';
    testPriorityClass = 'priority-low';
  }

  return (
    <>
      {!isEditing ? (
        /* --- VIEW MODE --- */
        <li 
          data-testid="todo-item"
          className={`d-flex justify-content-between align-items-center mb-3 p-3 bg-white rounded border border-start border-5 shadow-sm ${priorityBorderClass} ${testPriorityClass}`}
        >
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
            <button 
              data-testid="edit-todo"
              className="btn btn-sm btn-outline-secondary edit-todo" 
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button 
              data-testid="delete-todo"
              className="btn btn-sm btn-outline-danger delete-todo" 
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ) : (
        /* --- EDIT MODE --- */
        <li 
          data-testid="todo-item"
          className={`d-flex justify-content-between align-items-center mb-3 p-3 bg-white rounded border border-start border-5 shadow-sm ${priorityBorderClass} ${testPriorityClass}`}
        >
          <div className="w-100">
            <div className="mb-2">
              <label htmlFor={`update-todo-text-${todo.id}`} className="form-label fw-semibold">I want to...</label>
              <textarea 
                id={`update-todo-text-${todo.id}`}
                data-testid="update-todo-text"   
                className="form-control" 
                rows="3"
                placeholder="Enter your task details..."
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor={`update-todo-priority-${todo.id}`} className="form-label fw-semibold">How much of a priority is this?</label>
              <select 
                id={`update-todo-priority-${todo.id}`}
                data-testid="update-todo-priority" 
                className="form-select"
                value={priority}
                onChange={(e) => setPriority(Number(e.target.value))}
              >
                <option value="1">1 (High)</option>
                <option value="2">2 (Medium)</option>
                <option value="3">3 (Low)</option>
              </select>
            </div>

            <div className="d-flex gap-2">
              <button 
                data-testid="update-todo" 
                className="btn btn-primary fw-bold px-4" 
                type="button"
                onClick={() => {
                  updateTodo(todo.id, taskText, priority); 
                  setIsEditing(false);                     
                }}
              >
                Save
              </button>
              <button 
                className="btn btn-outline-secondary fw-bold" 
                type="button"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </li>
      )}
    </>
  );
}

export default TodoItem;