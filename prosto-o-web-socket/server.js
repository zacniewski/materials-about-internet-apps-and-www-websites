const http = require('http');
//importing ws module
const websocket = require('ws');

const server = http.createServer((req, res) => {
    res.end("I am connected");
});
//creating websocket server
const wss = new websocket.Server({ server });

server.listen(8000);