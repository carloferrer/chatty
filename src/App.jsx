import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: {name: "Bob"},
      messages: [],
      update: ''
    }

    this.socket;
  }

  componentDidMount() {
    this.socket = new WebSocket("ws://0.0.0.0:3001");
    console.log('Connecting to 0.0.0.0:3001.');

    this.socket.onmessage = (event) => {
      let msg = JSON.parse(event.data);

      if (msg.notify) {
        console.log(msg.notify);
      }

    let messages = [...this.state.messages, {id: msg.id, username: msg.user, content: msg.content, update: msg.notify}];

    this.setState({messages})
    }
  }

  onSubmitMsg = (current, user, content) => {
    let oldCurrent = this.state.currentUser.name;

    this.socket.send(JSON.stringify(
      {oldCurrent, user, content}
    ));

    this.setState({currentUser: {name: current}});
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
