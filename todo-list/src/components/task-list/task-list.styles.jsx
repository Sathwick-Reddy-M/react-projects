import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: red;
`;
