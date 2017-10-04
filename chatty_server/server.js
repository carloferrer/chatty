// chatter_server/server.js

const express = require('express');
const WebSocket = require('ws');
const uuidv1 = require('uuid/v1');

const PORT = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new WebSocket.Server({ server });

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', (client, req) => {
  let ip = [];
  ip.push(req.connection.remoteAddress);
  console.log(ip);
  // console.log(Object.keys(wss.clients));
  // console.log('Client connected');

  client.on('message', function incoming(incoming) {

    let message = JSON.parse(incoming);
    message.id = uuidv1();

    if (message.oldCurrent !== message.user) {
      message.notify = `${message.oldCurrent} changed name to ${message.user}!`;
    }

    console.log(message);
    wss.broadcast(JSON.stringify(message));
  });

  client.on('close', () => console.log('Client disconnected'));
});