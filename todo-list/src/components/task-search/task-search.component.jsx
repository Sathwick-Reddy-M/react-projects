import { forwardRef } from "react";
import "./task-search.styles.css";

export const TaskSearch = forwardRef(function TaskSearch(
  { name, id, placeholder, inputHandler },
  ref
) {
  return (
    <input
      type="search"
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={inputHandler}
      ref={ref}
    />
  );
});
