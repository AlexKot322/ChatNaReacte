import React from 'react';


import onlineIcon from '../../icons/onlineIcon.png';


import './InfoBar.css';

const InfoBar = ({ room }) => (
    <div className="chat-header">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online"/>
            <h3>{room}</h3>
        </div>
        <button className="btn">
            <a href="/">Покинуть комнату</a>
        </button>
    </div>
)
export default InfoBar;