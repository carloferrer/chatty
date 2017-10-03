import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: [
        {
          id: 0,
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: 1,
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    }
  }

  //https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17

  componentDidMount() {
    /// WEBSOCKETS
    var chattySocket = new WebSocket("ws://0.0.0.0:3001");
    console.log('Connected to 0.0.0.0:3001.');

    setTimeout(() => {
      console.log("Simulating incoming message");
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
    }, 3000);
  }


  // USER-ACTION
  onSubmitMsg = (newID, newUser, newMsg) => {

    //create new array
    //read up on spread operator
    //take existing array - throw thing after comma onto end of array

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
