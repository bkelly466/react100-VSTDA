import React from 'react';
import TodoItem from './TodoItem';


function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <>
      <div className="card h-100 shadow-sm border-0">
        <div className="card-header bg-light d-flex justify-content-between align-items-center py-3">
          <h5 className="mb-0 fw-bold text-secondary">View Todos</h5>
          
          {/* Wrap your Sort button/select layout in its own div if it isn't already */}
          <div className="sort-container">
            {/* Your existing Sort button or select dropdown goes here */}
            <select className="form-select form-select-sm" aria-label="Sort todos">
              <option value="default">Sort by...</option>
              <option value="high">High Priority</option>
              <option value="low">Low Priority</option>
            </select>
          </div>
        </div>
        <div className="card-body p-4 text-start text-muted">
          
          {todos.length === 0 ? (
            <div className="py-5 bg-light rounded border border-dashed text-center">
              <p className="mb-0">No tasks found. Add a task to get started!</p>
            </div>
          ) : (
            <div className="todo-list-container">
              {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                />
              ))}
            </div>
          )}
          
        </div>
      </div>
    </>
  );
}

export default TodoList;
