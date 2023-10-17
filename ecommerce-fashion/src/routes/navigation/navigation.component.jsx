import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/react-logo.svg";
import "./navigation.styles.scss";

function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo"></Logo>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/example">
            Example
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
}

export default Navigation;
