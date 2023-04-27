import React, { useState } from "react";
import Display from "./Display";
import "./Create.css";

function Create({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  const handleClick = () => {
    if (todo === "") {
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), text: todo, completed: false },
      ]);
      setTodo("");
    }
  };

  return (
    <div className="container">
      <h1>TO DO LIST</h1>
      <form className="user-box">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <label>ADD Items</label>

        <button className="btn1" type="submit" onClick={handleClick}>
          ADD
        </button>
      </form>
      <Display todos={todos} />
    </div>
  );
}

export default Create;
