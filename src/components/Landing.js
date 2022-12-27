import React, { useState, useEffect } from "react";
import "../styles/Landing.css";
import Nav from "./Nav";
import Timer from "./Timer";
import { Link } from "react-router-dom";
import {
  GiMaze,
  GiBroadsword,
  GiSoccerBall,
  GiJumpAcross,
  GiWaterPolo,
} from "react-icons/gi";

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
        <h1 className="header">
          <div className="line-one">
            <span className="l">T</span>
            <span className="l">I</span>
            <span className="l">P</span>
            <span className="l">T</span>
            <span className="l">O</span>
            <span className="l">W</span>
            <span className="l">S</span>
          </div>
          <div className="line-two">
            {" "}
            <span className="l">S</span>
            <span className="l">M</span>
            <span className="l">P</span>
          </div>
          <div className="line-three">
            <span className="l">S</span>
            <span className="l">E</span>
            <span className="l">R</span>
            <span className="l">V</span>
            <span className="l">E</span>
            <span className="l">R</span>
          </div>
        </h1>
        <div className="countdown">
          Countdown:{" "}
          <Timer
            timerDays={timerDays}
            timerHours={timerHours}
            timerMinutes={timerMinutes}
            timerSeconds={timerSeconds}
          />
        </div>
        <div className="icons-outer">
          <div className="sword-box">
            <GiBroadsword className="sword-icon" />
            <div className="sword-text">Survival</div>
          </div>
          <div className="sword-box">
            <GiSoccerBall className="sword-icon" />
            <div className="sword-text">Soccer</div>
          </div>
          <div className="sword-box">
            <GiJumpAcross className="sword-icon" />
            <div className="sword-text">Parkour</div>
          </div>
          <div className="sword-box">
            <GiWaterPolo className="sword-icon" />
            <div className="sword-text">water wars</div>
          </div>
          <div className="maze-box">
            <GiMaze className="maze-icon" />
            <div className="maze-text">Mazes</div>
          </div>
        </div>
      </div>
      <footer>
        <Link to="/forum" className="forum-button">
          FORUM
          <div className="forum-picture"></div>
        </Link>
        <Link to="/shop" className="shop-button">
          SHOP
          <div className="shop-picture"></div>
        </Link>
      </footer>
    </>
  );
}

export default Landing;
