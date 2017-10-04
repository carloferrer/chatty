import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: [],
      online: ''
    }
    this.socket;
  }

  componentDidMount() {
    this.socket = new WebSocket("ws://0.0.0.0:3001");
    console.log('Connected to 0.0.0.0:3001.');

    this.socket.onmessage = (event) => {
      // Parse incoming data regardless of what it is.
      let incoming = JSON.parse(event.data);

      // If incoming data contains the object key 'connected', update the online-user count.
      if(incoming.connected) {
        let connect_msg = `Chatters online: ${incoming.connected}`;
        this.setState({online: connect_msg})
      }

      // If incoming data contains a unique ID generated for new messages, update the list of messages.
      if(incoming.id) {

        let notify_msg = '';
        let msg = incoming;

        // If the user changed their name, update notify_msg.
        if (msg.oldCurrent !== msg.user) {
          notify_msg = `${msg.oldCurrent} changed name to ${msg.user}`;
        }

        let messages = [...this.state.messages, {id: msg.id, username: msg.user, content: msg.content, update: notify_msg}];
        this.setState({messages})
      }
    }
  }

  onSubmitMsg = (user, content) => {
    this.setState({currentUser: {name: user}});

    // The original username is this state's currentUser.name.
    let oldCurrent = this.state.currentUser.name;

    this.socket.send(JSON.stringify(
      {oldCurrent, user, content}
    ));
  }

  render() {

    return (
      <div>

        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <div className="navbar-online">{this.state.online}</div>
        </nav>

        <ChatBar name={this.state.currentUser.name} onSubmitMsg={this.onSubmitMsg}/>

        <MessageList messages={this.state.messages}/>

      </div>
    );
  }

}
export default App;
