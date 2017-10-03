import React, {Component} from 'react';

class ChatBar extends Component {

// USER-ACTION
  constructor(props) {
    super(props);
    this.state = {username: this.props.name, content: ''}
  }

  handleContentUpdate = (event) => {
    this.setState({content: event.target.value});
  }

  handleKeyPressContent = (event) => {
    if (event.key === 'Enter') {
      console.log("PRESSED ENTER");
      console.log(this.state.content);
      this.props.onSubmitMsg(this.state.content);
      this.setState({content: ''});
    }
  }

  render() {
    return (

        <footer className="chatbar">
          <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.name}/>
          <input className="chatbar-message" placeholder="Type a message and hit ENTER" value={this.state.content} onChange={this.handleContentUpdate} onKeyPress={this.handleKeyPressContent}/>
        </footer>

    );
  }
}

// onchange
// in chatbar, update the state
// then give state as arguments to callback function
// the payload is this.state.whatever
export default ChatBar;
