import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

export function Navigation() {
  return (
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
