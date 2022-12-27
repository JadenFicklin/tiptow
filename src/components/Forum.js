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
        <div className="forum-inner">
          <h1 className="server-ip">play.myserver.com</h1>
          <span className="motd">A beautiful minecraft server</span>
          <div>
            <span className="player-count">
              {info.players.now}/ {info.players.max}
            </span>{" "}
            Players Online
          </div>
          <div>
            {info.players.sample.map((x) => (
              <h2>{x.name}</h2>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Forum;
