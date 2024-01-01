import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { Navbar, NavLinks, NavLink } from "./navigation.styles";

export function Navigation() {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <Navbar>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          {currentUser ? (
            <>
              <NavLink onClick={signOutUser}>Sign Out</NavLink>
              <NavLink to="/reviews">Reviews</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/signin">Sign In</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>
            </>
          )}
        </NavLinks>
      </Navbar>
      <Outlet />
    </Fragment>
  );
}
