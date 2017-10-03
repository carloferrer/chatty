import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
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
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);


  }

  // USER-ACTION
  onSubmitMsg = (newMsg) => {
    //create new array
    //read up on spread operator
    //take existing array - throw thing after comma onto end of array
    const messages = [...this.state.messages, {id: 4, username: 'foo', content: newMsg}];
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
