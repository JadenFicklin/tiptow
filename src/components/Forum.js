import React, { useState } from "react";
import "../styles/Forum.css";

function Forum() {
  const [info, setInfo] = useState({});

  function initServerData(serverIp, serverPort) {
    fetch(
      "https://mcapi.us/server/status?ip=" + serverIp + "&port=" + serverPort
    )
      .then((response) => response.json())
      .then((data) => setInfo(data));

    if (info.status === "error") {
      console.log(info.error);
      return false;
    }
  }

  initServerData("tiptow.tk", "25565");

  return (
    <>
      <div className="forum-outer">
        <div className="stats">
          {/* <div className="server-running">
            Server Running: {JSON.stringify(info.online)}
          </div>
          <div>
            <span className="player-count">
              {info.players.now}/ {info.players.max}
            </span>{" "}
            Players Online
          </div>
          <div>
            Players:
            {info.players.sample.map((x) => (
              <span>{x.name}</span>
            ))}
          </div> */}
        </div>
        <div className="forum-outer-inner">
          <div className="forum-box-one">
            <div className="welcome-to-forum">Welcome to the Forum!</div>
            <div className="box-one-header">
              Create a thread <div className="circle">+</div>
            </div>
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>
          </div>
          <div className="forum-box-two">
            <div className="forum-box-two-top">
              <div className="top-heading">Top Threads</div>
            </div>
            <div className="forum-box-two-ranks">
              <div className="ranks-heading">Ranked Players</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forum;
