import {useState} from "react"

function TodoItem({ todo, updateTodo, deleteTodo }) {
  // Let's go back to our clean Bootstrap utility classes
  
  const [isEditing, setIsEditing] = useState(false)
  const [taskText, setTaskText] = useState(todo.text);
  const [priority, setPriority] = useState(todo.priority);

  let priorityBorderClass = '';
  if (todo.priority === 1) {
    priorityBorderClass = 'border-danger';   // High
  } else if (todo.priority === 2) {
    priorityBorderClass = 'border-warning';  // Medium
  } else {
    priorityBorderClass = 'border-success';  // Low
  }

  

  return (
    <>
    {!isEditing? (
      <li data-testid="todo-item" className={`d-flex justify-content-between align-items-center mb-3 p-3 bg-white rounded border border-start border-5 shadow-sm ${priorityBorderClass}`}>
      
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
    </li>) : (
      <li className={`d-flex justify-content-between align-items-center mb-3 p-3 bg-white rounded border border-start border-5 shadow-sm ${priorityBorderClass}`}>
      
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
        
        <div>
          <label htmlFor="update-todo-text" className="form-label fw-semibold">I want to...</label>
              <textarea 
                id="update-todo-text" 
                data-testid="update-todo-text"   
                className="form-control" 
                placeholder="Enter your task details..."
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
              />
          <label htmlFor="update-todo-priority" className="form-label fw-semibold">How much of a priority is this?</label>
              <select 
                id="update-todo-priority"
                data-testid="update-todo-priority" 
                className="form-select"
                value={priority}
                onChange={(e) => setPriority(Number(e.target.value))}
              >
                <option value="1">1 (High)</option>
                <option value="2">2 (Medium)</option>
                <option value="3">3 (Low)</option>
          </select>
          <button 
            data-testid="update-todo" 
            className="btn btn-primary w-100 py-2 fw-bold" 
            type="submit"
            onClick={() => {
              updateTodo(todo.id, taskText, priority); 
              setIsEditing(false);                     
            }}
            >
              Save
          </button>
        </div>
      </li>
    )}
    </>
  );
}

export default TodoItem;