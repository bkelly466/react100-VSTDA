import './App.css'
import {useState} from "react";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  // States held here
  const [todo, setTodo] = useState([]);

  const handleAddTodo = (text, priority) => {
    const newTodo = {
      id: Date.now(), // Unique ID for React keys
      text: text,
      priority: Number(priority)
    };

    setTodo([...todo, newTodo]);
  };

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
            <TodoList todos={todo} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
