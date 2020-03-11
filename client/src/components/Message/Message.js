import React from 'react';

import './Message.css'

const Message = ( { message: { user, text }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase;

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser 
        ? (
            <div className="message-container justify-end">
                <p className="sent-text pr-10"> {trimmedName} </p>
                <div className="message-box background-blue">
                    <p className="message-text"> {text} </p>
                </div>
            </div>
        )
        : (
            <div className="message-container justify-start">
                <p className="sent-text"> {trimmedName} </p>
                <div className="message-box background-light">
                    <p className="message-text"> {text} </p>
                </div>
            </div>
        )
    )
}

export default Message;