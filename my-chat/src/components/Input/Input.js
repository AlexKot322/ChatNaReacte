import React from "react";


import './Input.css'


const Input = ({message, setMessage, sendMessage}) => (
    <div className="chat-form-container">
    <form className="form" id="chat-form">
        <input 
        className="input"
        type="text"
        placeholder="Введите сообщение..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null}
        />
        <button className="btn" onClick={(event) => sendMessage(event)}>Отправить</button>
    </form>
    </div>
)

          
export default Input;