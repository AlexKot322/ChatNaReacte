import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="join-container">
        <header class="join-header">
            <h1><i class="fas fa-smile"></i>ЧатAPP</h1>
        </header>
      <div className="join-main">
        <form action="chat.html">
        <div className="form-control">
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="btn" type="submit">
            Присоединиться
          </button>
        </Link>
        </form>
      </div>
    </div>
  );
};

export default Join;
