import React, {Component} from 'react';

class Message extends Component {
  render() {
    return (
      <div>
      <div class="message">
        <span class="message-username">Anonymous1</span>
        <span class="message-content">I will not be impressed with technology until I can download food.</span>
      </div>
      <div class="message system">
        Anonymous1 changed their name to nomnom.
      </div>
      </div>
    );
  }
}
export default Message;
