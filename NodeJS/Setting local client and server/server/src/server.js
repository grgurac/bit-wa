const loremIpsum = require('lorem-ipsum');
const nodemon = require('nodemon');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const createRandomPost = () => {
     
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', "http://127.0.0.1:3000");
    res.setHeader('Content-Type', 'application/json');
                const body = {
                    title: loremIpsum({
                        count: 3,
                        units: 'words',
                        sentenceLowerBound: 5,
                        sentenceUpperBound: 20,
                    }),
                    intro: loremIpsum({
                        count: 2,
                       units: 'sentences', 
                       sentenceLowerBound: 10,
                       sentenceUpperBound: 20,
                    }),
                    format:plain
                    }
    res.end(JSON.stringify(body));
});

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});