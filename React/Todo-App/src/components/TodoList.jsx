import { FiClipboard } from 'react-icons/fi';
import TodoItem from './TodoItem';

// TodoList component — receives todos array and handlers via props
// Uses conditional rendering to show empty state
function TodoList({ todos, onToggle, onDelete }) {
  // Conditional rendering: show empty state if no todos
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <FiClipboard size={40} className="empty-icon" />
        <p className="empty-msg">No tasks yet. Add one above!</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
