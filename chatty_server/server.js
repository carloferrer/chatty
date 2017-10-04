// chatter_server/server.js

const express = require('express');
const WebSocket = require('ws');
const uuidv1 = require('uuid/v1');

const PORT = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on port: ${ PORT }`));

const wss = new WebSocket.Server({ server });

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', (client, req) => {

  // Broadcast to all connected users to display number of users online.
  let connected = { connected: wss.clients.size };
  wss.broadcast(JSON.stringify(connected));

  // Upon message submission, generated unique ID for message, and broadcast back to connected users.
  client.on('message', function incoming(incoming) {
    let message = JSON.parse(incoming);
    message.id = uuidv1();

    // If the user changes their name, notify the rest of the users by adding another object key that will be handled on the client side.
    if (message.oldCurrent !== message.user) {
      message.notify = message.oldCurrent;
    }

    console.log(message);
    wss.broadcast(JSON.stringify(message));
  });

  client.on('close', () => console.log('Client disconnected'));
});