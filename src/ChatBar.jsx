import React, {Component} from 'react';

var uuidv1 = require('uuid/v1');

class ChatBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: this.props.name },

      message: {
        username: this.props.name,
        content: ''
      }
    }
  }

  handleUsernameUpdate = (event) => {
    this.setState({
      currentUser: { name: event.target.value }
    });

    this.setState({
      message: { username: event.target.value }
    });

    // console.log(this.state.currentUser.name);
    // console.log(this.state.message.username);
  }

  handleContentUpdate = (event) => {
    this.setState({
      message: { content: event.target.value }
    });
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log(`message.username: ${this.state.message.username}\ncurrentUser.name: ${this.state.currentUser.name}\nmessage.content: ${this.state.message.content}`);

      this.props.onSubmitMsg(
        this.state.currentUser.name,
        this.state.message.username,
        this.state.message.content
      );

      this.setState({
        message: {content: ''}
      });
    }
  }

  render() {
    return (
      <footer className="chatbar">

        <input
        className="chatbar-username"
        placeholder="Your Name (Optional)"
        value={this.state.currentUser.name}
        onChange={this.handleUsernameUpdate}
        onKeyPress={this.handleKeyPress}
        />

        <input
        className="chatbar-message"
        placeholder="Type a message and hit ENTER"
        value={this.state.message.content}
        onChange={this.handleContentUpdate}
        onKeyPress={this.handleKeyPress}
        />

      </footer>
    );
  }
}

export default ChatBar;