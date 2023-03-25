const express = require('express');
const http = require('http');

const app = express();

const server = http.createServer((req, res) => {
    
    if (req.url == "/home") {
        res.statusCode = 200
        res.write('this is page home');
    } else if(req.url == '/about') {
        res.statusCode = 200
        res.write('this is page about');
    } else if(req.url == '/portfolio') {
        res.statusCode = 200
        res.write('this is page portfolio');
    } else {
        res.statusCode = 404
        res.write('not Found 404');
    }
    res.end()
})


server.listen(3000, () => {
    console.log('server is running to port http://localhost:3000')
})