import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';
import './Messages.css';

const Messages = ({messages, name}) => (
    <div className="chat-messages">
        {messages.map((message, index) => <div key={index}><Message message={message} name={name}/></div>)}
    </div>
)

          
export default Messages;

