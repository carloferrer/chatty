import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: {name: "Bob"},
      messages: []
    }

    this.socket;
  }

  componentDidMount() {
    this.socket = new WebSocket("ws://0.0.0.0:3001");
    console.log('Connecting to 0.0.0.0:3001.');

    this.socket.onmessage = (event) => {
      let msg = JSON.parse(event.data);
      console.log(msg);

    let messages = [...this.state.messages, {id: msg.newID, username: msg.newUser, content: msg.newMsg}];

    this.setState({messages})
    }
  }

  onSubmitMsg = (current, user, msg) => {

    this.socket.send(JSON.stringify({user, msg}));

    this.setState({currentUser: {name: current}});

    // console.log(`You've changed your username!\n${this.state.currentUser.name} >> ${current}`);
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <ChatBar name={this.state.currentUser.name} onSubmitMsg={this.onSubmitMsg}/>
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }

}
export default App;
