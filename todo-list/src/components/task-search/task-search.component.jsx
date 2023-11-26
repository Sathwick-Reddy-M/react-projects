import { forwardRef } from "react";
import { StyledSearchInput } from "./task-search.styles.jsx";

export const TaskSearch = forwardRef(function TaskSearch(
  { name, id, placeholder, inputHandler },
  ref
) {
  return (
    <StyledSearchInput
      type="search"
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={inputHandler}
      ref={ref}
    />
  );
});
