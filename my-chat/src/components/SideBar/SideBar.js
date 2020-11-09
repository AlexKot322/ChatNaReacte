import React from 'react';



import onlineIcon from '../../icons/onlineIcon.png';

import './SideBar.css';

const SideBar = ({ room, users }) => (
    <div className="chat-sidebar">
        <h3>Комната:</h3>
        <h2>{room}</h2>

        <div>
        <h3>Посетители:</h3>
        
        {
      users
        ? (
          <div>
            <div>
              <h2>
                {users.map(({name}) => (
                  <div key={name}>
                    {name}
                    <img className="icon" alt="Online Icon" src={onlineIcon} />
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
        </div>

    </div>
)
export default SideBar;