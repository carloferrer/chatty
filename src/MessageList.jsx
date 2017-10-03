import React, {Component} from 'react';
import Message from './Message.jsx'

class MessageList extends Component {
  render() {

    const listMessages = this.props.messages.map( msg =>
      <Message key={msg.id} msg={msg}/>
      );

    return (
      <div>
        <main className="messages">
          {listMessages}
        </main>
      </div>
    );
  }
}
export default MessageList;
