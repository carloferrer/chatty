import React, {Component} from 'react';

class ChatBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: this.props.name,
      id: Date.now(),
      username: this.props.name,
      content: ''
    }
  }

  handleUsernameUpdate = (event) => {
    this.setState({username: event.target.value});
    this.setState({current: event.target.value});
  }

  handleContentUpdate = (event) => {
    this.setState({content: event.target.value});
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.setState({id: Date.now()});

      this.props.onSubmitMsg(this.state.current, this.state.id, this.state.username, this.state.content);

      this.setState({content: ''});
    }
  }

  render() {
    return (

        <footer className="chatbar">

          <input
          className="chatbar-username"
          placeholder="Your Name (Optional)"
          value={this.state.username}
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