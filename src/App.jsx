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
    /// WEBSOCKETS
    this.socket = new WebSocket("ws://0.0.0.0:3001");
    console.log('Connecting to 0.0.0.0:3001.');

    this.socket.onmessage = (event) => {
      console.log('EVENT');
    }
  }


  // USER-ACTION
  onSubmitMsg = (newID, newUser, newMsg) => {

    //create new array
    //read up on spread operator
    //take existing array - throw thing after comma onto end of array

    this.socket.send(JSON.stringify({newUser, newMsg}));

    let messages = [...this.state.messages, {id: newID, username: newUser, content: newMsg}];

    //render array again
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
