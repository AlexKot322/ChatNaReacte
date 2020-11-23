import React from 'react';

import FetchRandomUser from '../Chat/FetchRandomUser';


import './SideBar.css';

const SideBar = ({ room, users, avatar }) => (
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
                  <div className="userAndPhoto" key={name}>
                    {name}
                    <FetchRandomUser />
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