import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MovieItem = styled.li`
  margin-bottom: 10px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
