// Application entrypoint.

// Load up the application styles
console.log('index.jsx > loading application styles');
require('../styles/application.scss');

// Render the top-level React component
console.log('index.jsx > importing the stuff');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App />, document.getElementById('react-root'));
