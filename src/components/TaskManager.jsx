import React, { useState, useEffect } from 'react';

// Custom hook for localStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  // Add a new task
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false, id: Date.now() }]);
      setInput('');
    }
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input
          className="border rounded px-2 py-1 flex-1"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="bg-blue-600 text-white px-4 py-1 rounded" onClick={addTask}>Add</button>
      </div>
      <div className="flex gap-2 mb-4">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'font-bold underline' : ''}>All</button>
        <button onClick={() => setFilter('active')} className={filter === 'active' ? 'font-bold underline' : ''}>Active</button>
        <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'font-bold underline' : ''}>Completed</button>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} className="flex items-center justify-between mb-2">
            <span
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}
            >
              {task.text}
            </span>
            <button className="text-red-500" onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
        {filteredTasks.length === 0 && <li className="text-gray-400">No tasks</li>}
      </ul>
    </div>
  );
}

export default TaskManager;