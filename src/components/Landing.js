import React from "react";
import "../styles/Landing.css";
import Nav from "./Nav";

function Landing() {
  return (
    <>
      <Nav />
      <div className="landing-outer"></div>
      <div className="landing-overlay"></div>
    </>
  );
}

export default Landing;
