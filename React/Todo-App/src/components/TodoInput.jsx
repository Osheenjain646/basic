import { FiPlus } from 'react-icons/fi';

// TodoInput component — receives value, onChange, and onAdd via props
function TodoInput({ value, onChange, onAdd }) {
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      onAdd();
    }
  }

  return (
    <div className="input-row">
      <input
        type="text"
        placeholder="Add a new task..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="todo-input"
      />
      <button onClick={onAdd} className="add-btn">
        <FiPlus size={20} />
        Add
      </button>
    </div>
  );
}

export default TodoInput;
