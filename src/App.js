import "./App.css";
import React, { useState } from "react";
import Create from "./components/Create";

function App() {
  const initialTodos = localStorage.getItem("Todos")
    ? JSON.parse(localStorage.getItem("Todos"))
    : [];
  const [todos, setTodos] = useState(initialTodos);
  localStorage.setItem("Todos", JSON.stringify(todos));
  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Create todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
