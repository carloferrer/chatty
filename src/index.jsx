// Application entrypoint.

// Load up the application styles
console.log('index.jsx > loading application styles');
require('../styles/application.scss');

// Render the top-level React component
console.log('index.jsx > importing the stuff');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';


ReactDOM.render(<App/>, document.getElementById('react-root'));

