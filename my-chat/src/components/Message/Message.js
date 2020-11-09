import React from 'react';
import moment from 'moment';

import './Message.css';

import ReactEmoji from 'react-emoji'


const Message = ({message: {user, text}, name}) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();
    const time = moment().format('LLL')

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
        ? (
            <div className="messageContainer justifyEnd">
                <p className="sentTime pr-10">{time}</p>
                <p className="sentText pr-10">{trimmedName}</p>
            <div className="messageBox backgroundBlue">
                <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
            </div>
            </div>
        )
        : (
            <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
                <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentText pl-10">{user}</p>
            <p className="sentTime pl-10">{time}</p>
            </div>
        )
    )
}

          
export default Message;