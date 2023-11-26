import { forwardRef } from "react";
import {
  Container,
  StyledInput,
  StyledButton,
} from "./task-addition.styles.jsx";

export const TaskAddition = forwardRef(
  ({ name, id, placeholder, clickHandler }, ref) => {
    return (
      <Container>
        <StyledInput
          type="text"
          name={name}
          id={id}
          placeholder={placeholder}
          ref={ref}
        />
        <StyledButton onClick={clickHandler}>+</StyledButton>
      </Container>
    );
  }
);
