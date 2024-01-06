import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { Navbar, NavLinks, NavLink } from "./navigation.styles";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

export function Navigation() {
  const currentUser = useSelector(selectCurrentUser);

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
