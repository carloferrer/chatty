// Message.jsx

import React, {Component} from 'react';

class Message extends Component {
  render() {
    return (
      <div>
        <div className="message">
          <span className="message-username">{this.props.msg.username}</span>
        <span className="message-content">{this.props.msg.content}</span>
        </div>

        <div className="message system">
          {this.props.msg.update}
        </div>

      </div>
    );
  }
}
export default Message;
