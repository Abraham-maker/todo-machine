import {React, useContext} from "react";
import "./TodoSearch.css";
import { TodoContext } from "../../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <div className="Container">
      <input
        className="TodoSearch"
        placeholder="search by filter"
        onChange={onSearchValueChange}
        value={searchValue}
      />
    </div>
  );
}

export default TodoSearch;
