import React from 'react';
import './Message.css';
import logo from '../../logo.svg';

function Message() {
  const date = new Date();
  const displayDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  return (
    <div className="message">
      <div className="message-header">
        <img src={logo} alt="Alt text" />
        <div className="message-header-text__block">
          <p className="message-header-title">Ivan</p>
          <span className="message-header-date">{displayDate}</span>
        </div>
      </div>
      <div className="message-body">
        <h2 className="message-title">Hi this is title!</h2>
        <p className="message-text">Lorem ipsum semi-long text ....</p>
      </div>
    </div>
  );
}

export default Message;