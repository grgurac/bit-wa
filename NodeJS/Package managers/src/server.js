
const fig = require("./fig")

const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', "http://127.0.0.1:5500");
    res.setHeader('Content-Type', 'text/plain');
    res.end(fig.text);
});

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});