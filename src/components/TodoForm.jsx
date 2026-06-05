import {useState} from 'react';

function TodoForm({ addTodo }) {
  //States held here
  const [taskText, setTaskText] = useState('');
  const [priority, setPriority] = useState(3);

  //Logic for form submission
  const handleSubmit = () => {
    e.preventDefault();
    if (!taskText.trim()) return; 
    setTodo([...todo, newTodo]);
    setTaskText('')
  }

  return (
    <div className="card h-100 shadow-sm border-0">

      <h2 className="card-header bg-light py-3 border-bottom-0">Add New Task</h2>

      <div className="card-body p-4">

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="creat-todo-text" className="form-label fw-semibold">I want to...</label>
            <input 
              id="creat-todo-text" 
              data-testid="creat-todo-text"   
              className="form-control" 
              rows="3"
              placeholder="Enter your task details..."
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="create-todo-priority" className="form-label fw-semibold">How much of a priority is this?</label>
            <select 
              id="create-todo-priority"
              data-testid="create-todo-priority" 
              className="form-select"
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="1">1 (High)</option>
              <option value="2">2 (Medium)</option>
              <option value="3">3 (Low)</option>
            </select>
          </div>

          <button className="btn btn-primary w-100 py-2 fw-bold" type="submit">
            Add Task
          </button>
        </form>
      </div>              
    </div>
  );
}

export default TodoForm;
