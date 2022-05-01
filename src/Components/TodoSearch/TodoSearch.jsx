import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
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
