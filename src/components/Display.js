import React, { useState, useEffect } from "react";
import "./Display.css";

function Display({ todos }) {
  const [Todos, setTodos] = useState(todos);

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(Todos));
  }, [Todos]);

  const handleChange = (id) => {
    const updatedTodos = Todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return { ...todo };
      }
    });

    setTodos(updatedTodos);
  };

  const handleClick = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id) => {
    const newText = window.prompt(
      "Enter new text",
      todos.find((item) => item.id === id)?.text
    );
    if (newText) {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        } else {
          return { ...todo };
        }
      });
      setTodos(updatedTodos);
    }
  };

  return (
    <div className="list">
      {Todos.map((item) => (
        <li className="list-items" key={item.id}>
          <input
            className="check"
            onChange={() => handleChange(item.id)}
            type="checkbox"
            checked={item.completed}
          />
          <span className={item.completed ? "strike" : "item"}>
            {item.text}
          </span>
          <div className="crud">
            <button onClick={() => handleEdit(item.id)}>EDIT</button>
            <button onClick={() => handleClick(item.id)}>DELETE</button>
          </div>
        </li>
      ))}
    </div>
  );
}

export default Display;
