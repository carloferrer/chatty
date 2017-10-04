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

  //https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17

  componentDidMount() {
    this.socket = new WebSocket("ws://0.0.0.0:3001");
    console.log('Connecting to 0.0.0.0:3001.');

    this.socket.onmessage = (event) => {
      console.log('EVENT');
    }
  }


  onSubmitMsg = (newID, newUser, newMsg) => {

    this.socket.send(JSON.stringify({newUser, newMsg}));

    let messages = [...this.state.messages, {id: newID, username: newUser, content: newMsg}];

    this.setState({messages})
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
