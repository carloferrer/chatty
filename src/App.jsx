console.log('App.jsx > import react and whatnot');
import React, {Component} from 'react';

class App extends Component {
  console.log('App.jsx > inside class definition');
  render() {
    console.log('App.jsx > inside render');
    return (
      console.log('App.jsx > inside return');
      <h1>Hello React :)</h1>
    );
  }
}
export default App;
