import './App.css'
import {useState} from "react";
import TodoForm from './components/TodoForm';

function App() {
  // States held here
  const [todo, setTodo] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [priority, setPriority] = useState(3);


  // logic for button click
  const addTodo = () => {
    if (!taskText.trim()) return; // Prevent adding empty tasks

    const newTodo = {
      id: Date.now(), // Unique ID for React keys
      text: taskText,
      priority: priority
    };

    setTodo([...todo, newTodo]);
    setTaskText('')
  }

  return (
    <>
      <div className="container my-5 text-dark">

        <div className="mb-4">
          <h1 className="display-5 fw-bold">Very Simple TODO App</h1>
          <p className="text-muted fs-5">Track all of the things</p>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <TodoForm addTodo={handleAddTodo} />
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
