import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  padding: 8px;
  margin-right: 5px;
  border: 2px solid #ccc;
  border-radius: 4px;
  flex-grow: 1;
`;

export const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;
