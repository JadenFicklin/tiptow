import React from "react";
import "../styles/Nav.css";
import { AiFillCaretDown } from "react-icons/ai";

function Nav() {
  return (
    <>
      <div className="nav-outer">
        <div className="nav-inner">
          <div className="logo"></div>
          <div className="forum">FORUM</div>
          <div className="shop">SHOP</div>
          <div className="events">EVENTS</div>
          <div className="sign-in">
            SIGN IN <AiFillCaretDown className="icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
