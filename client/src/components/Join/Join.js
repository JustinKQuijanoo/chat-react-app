import React, { useState} from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
    const [name, setName] = useState(''); 
    const [room, setRoom] = useState(''); 

    return (
        <div className="join-outer-container">
            <div className="join-inner-container">
                <h1 className="heading">Join</h1>
                <div><input type="text" placeholder="Name" className="join-input" onChange={(event) => setName(event.target.value)}/></div>
                <div><input type="text" placeholder="Room" className="join-input mt-20" onChange={(event) => setRoom(event.target.value)}/></div>
                <Link 
                onClick={event => (!name || !room) ? event.defaultPrevented() : null} 
                to={`/chat?name=${name}&room=${room}`}>
                    <button type="submit" className="button mt-20">Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;