import { useState } from "react";

import ToDo from "./components/ToDo";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ]);

  return (
    <div className="app">
      <h1>Tasks List</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <ToDo key={todo.id} todo={ todo } />
        ))}
      </div>
      <Form />
    </div>
  );
}

export default App;
