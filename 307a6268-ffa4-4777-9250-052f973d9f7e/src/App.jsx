import "./styles.css";
import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTask = (taskIndex) => {
    setTasks([...tasks.slice(0, taskIndex), ...tasks.slice(taskIndex + 1)]);
  };

  return (
    <div className="todo-list">
      <h2>To-do List</h2>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="todo-input"
        />
        <button onClick={addTask} className="add-button">
          Add Task
        </button>
      </div>
      <ul className="todo-items">
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            {task}
            <button onClick={() => removeTask(index)} className="remove-button">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
