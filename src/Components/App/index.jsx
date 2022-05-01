import React from "react";
import { useState } from "react";
import "./App.css";
import AppUI from "./AppUI";


function App() {

  const todot = [
        { text: "Ver curso en platzi", completed: false },
        { text: "Leer un libro", completed: false },
        { text: "Terminar de comer", completed: false },
  ]

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos ){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = useState(todot);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todos) => !!todos.completed).length;
  const totalTodos = todos.length;

  let serchedTodos = [];

  if (!searchValue.length >= 1) {
    serchedTodos = todos;
  } else {
    serchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const saveTodos = (newTodos) => {
    const stingifyTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stingifyTodos);
    setTodos(newTodos);
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text == text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text == text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI 
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    serchedTodos={serchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    setSearchValue={setSearchValue}
    searchValue={searchValue}
    />
  );
}

export default App;
