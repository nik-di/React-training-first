import React from 'react';
import './Message.css';

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
      counter: 0
    };
  }
  render() {
    const { logo, name, title, text } = this.props;
    const { counter, isLiked } = this.state;

    const date = new Date();
    const displayDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const likeBtnClassName = `like__icon ${isLiked ? 'active' : ''}`;

    return (
      <div className="message">
        <div className="message-header">
          <img src={logo} alt="Alt text" />
          <div className="message-header-text__block">
            <p className="message-header-title">{name}</p>
            <span className="message-header-date">{displayDate}</span>
          </div>
          <div className="like">
            <button
              className={likeBtnClassName}
              onClick={() => {
                if (isLiked) {
                  this.setState({ counter: 0 });
                } else {
                  this.setState({ counter: 1 });
                }
                this.setState({ isLiked: !isLiked });
              }}
            >♥</button>
            <span className="like__counter">{counter}</span>
          </div>
        </div>
        <div className="message-body">
          <h2 className="message-title">{title}</h2>
          <p className="message-text">{text}</p>
        </div>
      </div>
    );
  }
}

export default Message;