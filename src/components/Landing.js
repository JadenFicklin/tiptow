import React, { useState, useEffect } from "react";
import "../styles/Landing.css";
import Nav from "./Nav";
import Timer from "./Timer";

function Landing() {
  const [textToCopy] = useState("tiptow.tk");
  const [ipBoxIn, setIpBoxIn] = useState(false);
  const [copyClick, setCopyClick] = useState(false);

  const copyText = "Copy IP?";
  const copied = "Copied to clipboard!";

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;
  const startTimer = () => {
    const countDownDate =
      new Date("January 2, 2023 ").getTime() - 13 * 60 * 60 * 1000;

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // stop timer

        clearInterval(interval.current);
      } else {
        // update the timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

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
        <div className="countdown">
          Countdown:{" "}
          <Timer
            timerDays={timerDays}
            timerHours={timerHours}
            timerMinutes={timerMinutes}
            timerSeconds={timerSeconds}
          />
        </div>
      </div>
    </>
  );
}

export default Landing;
