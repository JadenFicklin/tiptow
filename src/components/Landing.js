import React, { useState } from "react";
import "../styles/Landing.css";
import Nav from "./Nav";

function Landing() {
  const [textToCopy] = useState("tiptow.tk");
  const [ipBoxIn, setIpBoxIn] = useState(false);
  const [copyClick, setCopyClick] = useState(false);

  const copyText = "Copy IP?";
  const copied = "Copied to clipboard!";

  return (
    <>
      <Nav />
      <div className="landing-outer"></div>
      <div className="landing-overlay"></div>
      <div className="landing-outer-overlay-box">
        <div
          className="ip-box"
          onClick={() => {
            navigator.clipboard.writeText(textToCopy);
            setCopyClick(true);
          }}
          onMouseEnter={() => setIpBoxIn(true)}
          onMouseLeave={() => setIpBoxIn(false)}
        >
          IP: tiptow.tk
        </div>
        {ipBoxIn && (
          <div className="copy-ip">{copyClick ? copied : copyText}</div>
        )}
        <h1 className="header">TIPTOWS SMP SERVER</h1>
        <div className="countdown"></div>
      </div>
    </>
  );
}

export default Landing;
