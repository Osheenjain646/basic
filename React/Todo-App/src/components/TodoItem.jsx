import { FiTrash2, FiCheck } from 'react-icons/fi';

// TodoItem component — receives a single todo and handlers via props
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {/* Custom checkbox using FiCheck icon */}
      <button
        className={`check-btn ${todo.completed ? 'checked' : ''}`}
        onClick={() => onToggle(todo.id)}
        aria-label="Toggle todo"
      >
        {/* Conditional rendering: show checkmark only when completed */}
        {todo.completed && <FiCheck size={13} strokeWidth={3} />}
      </button>

      <span className="todo-text">{todo.text}</span>

      <button
        onClick={() => onDelete(todo.id)}
        className="delete-btn"
        aria-label="Delete todo"
      >
        <FiTrash2 size={16} />
      </button>
    </li>
  );
}

export default TodoItem;
