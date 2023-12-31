import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

export function Navigation() {
  const { currentUser } = useContext(UserContext);

  return currentUser ? (
    <Fragment>
      <div>
        <Link to="/">Home</Link>
        <Link onClick={signOutUser}>Sign Out</Link>
      </div>
      <Outlet />
    </Fragment>
  ) : (
    <Fragment>
      <div>
        <Link to="/">Home</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
      <Outlet />
    </Fragment>
  );
}
