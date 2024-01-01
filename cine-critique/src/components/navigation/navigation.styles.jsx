import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f5f5f5;
  color: #333;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
