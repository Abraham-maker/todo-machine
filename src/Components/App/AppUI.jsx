import React from "react";
import TodoSearch from "../TodoSearch/TodoSearch";
import TodoList from "../TodoList/TodoList";
import TodoItem from "../Todoitem/Todoitem";
import TodoCounter from "../TodoCounter/TodoCounter";
import CreateTodoButtom from "../CreateTodoButtom/CreateTodoButtom";

function AppUI({
  totalTodos,
  searchValue,
  completedTodos,
  setSearchValue,
  serchedTodos,
  completeTodo,
  deleteTodo
  
}) {
  return (
    <React.Fragment>
      <div className="container">
        <TodoCounter total={totalTodos} completed={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {serchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButtom />
      </div>
    </React.Fragment>
  );
}

export default AppUI;
