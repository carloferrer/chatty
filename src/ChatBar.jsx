import React, {Component} from 'react';

var uuidv1 = require('uuid/v1');

class ChatBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.name,

      username: this.props.name,
      content: ''
    }
  }

  handleUsernameUpdate = (event) => {
    this.setState({currentUser: event.target.value});
    this.setState({username: event.target.value});
  }

  handleContentUpdate = (event) => {
    this.setState({content: event.target.value});
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log(`username: ${this.state.username}\ncurrentUser: ${this.state.currentUser}\ncontent: ${this.state.content}`);

      this.props.onSubmitMsg(
        this.state.currentUser,
        this.state.username,
        this.state.content
      );

      this.setState({content: ''});
    }
  }

  render() {
    return (
      <footer className="chatbar">

        <input
        className="chatbar-username"
        placeholder="Your Name (Optional)"
        value={this.state.currentUser}
        onChange={this.handleUsernameUpdate}
        onKeyPress={this.handleKeyPress}
        />

        <input
        className="chatbar-message"
        placeholder="Type a message and hit ENTER"
        value={this.state.content}
        onChange={this.handleContentUpdate}
        onKeyPress={this.handleKeyPress}
        />

      </footer>
    );
  }
}

export default ChatBar;