require('dotenv').config();
const lineNotify = require('./lineNotify')

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    lineNotify(`somebody connected`)
    socket.on('disconnect', () => {
        console.log('somebody disconected')
    });
});

io.on('connection', (socket) => {
    socket.on('chat message', (message) => {
        io.emit('chat message', message);
        lineNotify(`somebody text : ${message}`)
    });
});
  
server.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});