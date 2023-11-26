import { forwardRef } from "react";
import { StyledSearchInput } from "./task-search.styles.jsx";

export const TaskSearch = forwardRef(function TaskSearch(
  { placeholder, inputHandler },
  ref
) {
  return (
    <StyledSearchInput
      type="search"
      placeholder={placeholder}
      onChange={inputHandler}
      ref={ref}
    />
  );
});
