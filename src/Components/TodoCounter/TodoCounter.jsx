import React from "react";
import "./TodoCounter.css";

function TodoCounter({total, completed}) {
  return (
    <div className="TodoCounter">
      <h1><span className="styling">TODO</span> List</h1>
      <br />
      <p className="Title">Has completado {completed} de {total} TODOs</p>
    </div>
  );
}

export default TodoCounter;
