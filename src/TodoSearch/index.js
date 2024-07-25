import "./TodoSearch.css";
import React from "react";

function TodoSearch({ searchValue, setSearchValue }) {
  //   const [searchValue, setSearchValue] = React.useState("");
  //  console.log("Los usuarios buscan todos de:" + searchValue);
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        // console.log("Todo search:");
        // console.log(event.target.value);
        setSearchValue(event.target.value);
      }}
    />
  );
}
export { TodoSearch };
