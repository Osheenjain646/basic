import { useState, useEffect } from 'react';
import { FiList, FiCheckSquare, FiSquare, FiXCircle } from 'react-icons/fi';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  // useState: hold the list of todos
  const [todos, setTodos] = useState([]);

  // useState: hold current input value
  const [inputValue, setInputValue] = useState('');

  // useState: hold active filter tab
  const [filter, setFilter] = useState('all'); // 'all' | 'active' | 'completed'

  // useEffect: load todos from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []); // empty dependency array → runs only once on mount

  // useEffect: save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); // runs every time todos array changes

  // Add a new todo
  function handleAdd() {
    const trimmed = inputValue.trim();
    if (trimmed === '') return;

    const newTodo = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  }

  // Toggle a todo's completed status
  function handleToggle(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  // Delete a todo
  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // Clear all completed todos
  function handleClearCompleted() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  // Filter todos based on active tab
  const filteredTodos =
    filter === 'active'
      ? todos.filter((t) => !t.completed)
      : filter === 'completed'
      ? todos.filter((t) => t.completed)
      : todos;

  const completedCount = todos.filter((t) => t.completed).length;
  const activeCount = todos.length - completedCount;

  return (
    <div className="app">
      <div className="card">

        {/* Title with icon */}
        <h1 className="title">
          <FiList className="title-icon" />
          My Todos
        </h1>

        {/* Input section */}
        <TodoInput
          value={inputValue}
          onChange={setInputValue}
          onAdd={handleAdd}
        />

        {/* Filter tabs with icons */}
        <div className="filter-tabs">
          <button
            className={`tab ${filter === 'all' ? 'active-tab' : ''}`}
            onClick={() => setFilter('all')}
          >
            <FiList size={14} />
            All ({todos.length})
          </button>
          <button
            className={`tab ${filter === 'active' ? 'active-tab' : ''}`}
            onClick={() => setFilter('active')}
          >
            <FiSquare size={14} />
            Active ({activeCount})
          </button>
          <button
            className={`tab ${filter === 'completed' ? 'active-tab' : ''}`}
            onClick={() => setFilter('completed')}
          >
            <FiCheckSquare size={14} />
            Done ({completedCount})
          </button>
        </div>

        {/* TodoList */}
        <TodoList
          todos={filteredTodos}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />

        {/* Conditionally render clear button only when there are completed todos */}
        {completedCount > 0 && (
          <button className="clear-btn" onClick={handleClearCompleted}>
            <FiXCircle size={15} />
            Clear completed ({completedCount})
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
