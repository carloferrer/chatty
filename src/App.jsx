console.log('App.jsx > import react and whatnot');
import React, {Component} from 'react';

class App extends Component {
  render() {
    console.log('App.jsx > inside render');
    return (
      <h1>Hello React :)</h1>
    );
  }
}
export default App;
