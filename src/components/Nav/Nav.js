import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import mapStoreToProps from "../../redux/mapStoreToProps";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const Nav = (props) => {
  let loginLinkData = {
    path: "/home",
    text: "Login / Register",
  };

  if (props.store.user.id != null) {
    loginLinkData.path = "/admin";
    loginLinkData.text = "Home";
  }

  return (
    <div className="nav">
      <DropdownMenu className="nav-title" />
      {/* <Link to="/home">


BAD MERGE RUIN THE MERGE
        <h2 className="nav-title">Prime Solo Project</h2>
      </Link> */}
      <div className="nav-right">
        <Link className="nav-link" to={loginLinkData.path}>
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {loginLinkData.text}
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
            <Link className="nav-link" to="/info">
              Info Page
            </Link>
            <LogOutButton className="nav-link" />
          </>
        )}
        {/* Always show this link since the about page is not protected */}
        <Link className="nav-link" to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
