import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {

    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.name}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" value={this.state.value} onChange={this.handleChange}/>
      </footer>
    );
  }
}
export default ChatBar;
