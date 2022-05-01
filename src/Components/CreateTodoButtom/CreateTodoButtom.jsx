import React from "react";
import "./CreateTodoButtom.css";

function CreateTodoButtom(props) {
  
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState)
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      <i className="fa-solid fa-plus"></i>
    </button>
  );
}

export default CreateTodoButtom;
