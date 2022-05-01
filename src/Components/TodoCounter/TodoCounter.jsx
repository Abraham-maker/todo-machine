import { React, useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../../TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);

  return (
    <div className="TodoCounter">
      <h1>
        <span className="styling">TODO</span> List
      </h1>
      <br />
      <p className="Title">
        Has completado {completedTodos} de {totalTodos} TODOs
      </p>
    </div>
  );
}

export default TodoCounter;
