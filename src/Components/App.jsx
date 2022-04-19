import React from "react";
import CreateTodoButtom from "../Components/CreateTodoButtom";
import TodoCounter from "../Components/TodoCounter";
import TodoItem from "../Components/TodoItem";
import TodoList from "../Components/TodoList";
import TodoSearch from "../Components/TodoSearch";

const todos = [
  { text: "Cortar Cebolla", completed: false },
  { text: "Curso Cebolla", completed: false },
  { text: "Comer Cebolla", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList />
      {todos.map((todo) => (
        <TodoItem key={todo.text} text={todo.text} />
      ))}
      <TodoList />
      <CreateTodoButtom />
    </>
  );
}

export default App;
