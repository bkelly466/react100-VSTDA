import TodoItem from './TodoItem';

function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <>
      <div className="card h-100 shadow-sm border-0">
        <h2 className="card-header bg-light py-3 border-bottom-0">View Todos</h2>
        <div className="card-body p-4 text-center text-muted">
          <div className="py-5 bg-light rounded border border-dashed">
            {todos.length === 0 ? (
              <p className="mb-0">No tasks found. Add a task to get started!</p>
            ) : (
              todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                />
            )))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
