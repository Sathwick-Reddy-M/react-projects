import { forwardRef } from "react";
import "./task-addition.styles.css";

export const TaskAddition = forwardRef(
  ({ name, id, placeholder, clickHandler }, ref) => {
    return (
      <div>
        <input
          type="text"
          name={name}
          id={id}
          placeholder={placeholder}
          ref={ref}
        />
        <button onClick={clickHandler}>+</button>
      </div>
    );
  }
);
