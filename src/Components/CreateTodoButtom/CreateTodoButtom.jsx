import React from "react";
import "./CreateTodoButtom.css";

function CreateTodoButtom(props) {
  
  const onClickButton = (msg) => {
    console.log(msg);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton("Aqui se deberia abrir el modal")}
    >
      <i className="fa-solid fa-plus"></i>
    </button>
  );
}

export default CreateTodoButtom;
