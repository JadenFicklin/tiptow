import React from "react";
import "../styles/Nav.css";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="nav-outer">
        <div className="nav-inner">
          <Link to="/">
            <div className="logo"></div>
          </Link>
          <Link to="/forum">
            <div className="forum">FORUM</div>
          </Link>

          <a
            href="https://www.tebex.io/"
            target={"_blank"}
            rel="noreferrer"
            className="shop"
          >
            SHOP
          </a>

          {/* <Link to="/events">
            <div className="events">EVENTS</div>
          </Link> */}
          <Link to="/signin">
            <div className="sign-in">
              SIGN IN <AiFillCaretDown className="icon" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
