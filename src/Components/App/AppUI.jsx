import React from "react";
import { useContext } from "react";
import TodoSearch from "../TodoSearch/TodoSearch";
import TodoList from "../TodoList/TodoList";
import TodoItem from "../Todoitem/Todoitem";
import TodoCounter from "../TodoCounter/TodoCounter";
import CreateTodoButtom from "../CreateTodoButtom/CreateTodoButtom";
import TodoFrom from "../TodoForm/TodoForm";
import { TodoContext } from "../../TodoContext";
import Modal from "../Modal/Modal";

function AppUI() {
  const {
    error,
    loading,
    serchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>OH OH... Tuvimos un error</p>}
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
      {loading && (
          <div class="fancy-spinner">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="dot"></div>
          </div>
        )}
      {!loading && !serchedTodos.length && (
        <p className="loading">
          Crea tu primera <span className="TODO">TODO!</span>...
        </p>
      )}
      {!!openModal && (
        <Modal>
          <TodoFrom />
        </Modal>
      )}
      <CreateTodoButtom setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default AppUI;
