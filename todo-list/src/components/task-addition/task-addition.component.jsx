import { forwardRef } from "react";
import {
  Container,
  StyledInput,
  StyledButton,
} from "./task-addition.styles.jsx";

export const TaskAddition = forwardRef(
  ({ placeholder, clickHandler, keyDownHandler }, ref) => {
    return (
      <Container>
        <StyledInput
          type="text"
          placeholder={placeholder}
          ref={ref}
          onKeyDown={keyDownHandler}
        />
        <StyledButton onClick={clickHandler}>+</StyledButton>
      </Container>
    );
  }
);
