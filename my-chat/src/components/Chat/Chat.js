import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";


import "./Chat.css";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import SideBar from "../SideBar/SideBar";
import FetchRandomUser from "./FetchRandomUser";


let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  return (
    <div>
    <div className="chat-container">
        <InfoBar room={room} />
        <div className="chat-main">
        <SideBar users={users} room={room}/>
        <Messages messages={messages} name={name}/>
      </div>
      <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
    </div>
    <div className="ourUsers">
      <h1>Наши пользователи</h1>
    <div className="items">
    <FetchRandomUser />
    <FetchRandomUser />
    <FetchRandomUser />
    <FetchRandomUser />
    </div>
    </div>
    </div>
  );
};

export default Chat;
