import React from 'react';
import './Message.css';

function Message(props) {
  const { logo, name, title, text } = props;

  const date = new Date();
  const displayDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  return (
    <div className="message">
      <div className="message-header">
        <img src={logo} alt="Alt text" />
        <div className="message-header-text__block">
          <p className="message-header-title">{name}</p>
          <span className="message-header-date">{displayDate}</span>
        </div>
      </div>
      <div className="message-body">
        <h2 className="message-title">{title}</h2>
        <p className="message-text">{text}</p>
      </div>
    </div>
  );
}

export default Message;