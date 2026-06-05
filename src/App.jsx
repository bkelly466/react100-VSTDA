import './App.css'
import {useState} from "react";

function App() {
  // Add your code here
  const [todo, setTodo] = useState([]);
  const [taskText, setTaskText] = useState();
  const [priority, setPriority] = useState(3);

  return (
    <>
      <div className="container my-5 text-dark">

        <div className="mb-4">
          <h1 className="display-5 fw-bold">Very Simple TODO App</h1>
          <p className="text-mutedfs-5">Track all of the things</p>
        </div>

        <div className="row g-4">

          <div className="col-md-4">

            <div className="card h-100 shadow-sm border-0">

              <h2 className="card-header bg-light py-3 border-bottom-0">Add New Task</h2>

              <div className="card-body p-4">

                <div className="mb-3">
                  <label htmlFor="creat-todo-text" className="form-label fw-semibold">I want to...</label>
                  <input 
                    id="creat-todo-text" 
                    data-testid="creat-todo-text"   
                    className="form-control" 
                    rows="3"
                    placeholder="Enter your task details..."
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

                <button className="btn btn-primary w-100 py-2 fw-bold">
                  Add Task
                </button>

              </div>              
            </div>
          </div>

          <div className="col-md-8">
            <div className="card h-100 shadow-sm border-0">
              <h2 className="card-header bg-light py-3 border-bottom-0">View Todos</h2>
              <div className="card-body p-4 text-center text-muted">
                <div className="py-5 bg-light rounded border border-dashed">
                  <p className="mb-0">No tasks found. Add a task to get started!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
