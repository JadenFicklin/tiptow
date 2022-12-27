import React from "react";
import "../styles/Timer.css";

function Timer({ timerDays, timerHours, timerMinutes, timerSeconds }) {
  return (
    <>
      <section className="timer-container">
        <section className="timer">
          <div className="clock">
            <section>
              <p className="sub-section">{timerDays}</p>
            </section>
            <span>:</span>
            <section>
              <p className="sub-section">{timerHours}</p>
            </section>
            <span>:</span>
            <section>
              <p className="sub-section">{timerMinutes}</p>
            </section>
            <span>:</span>
            <section>
              <p className="sub-section">{timerSeconds}</p>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}
Timer.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};
export default Timer;
