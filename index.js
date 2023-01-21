//port to use with server
const PORT = 8080;

const express = require('express');
var app = express();

//use server from node
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {

});

//set view engine
app.set('view engine', 'ejs');


//routes
app.get('/', (req, res) => {
    res.render('index');
});

//listen PORT
http.listen(PORT, () => {
    console.log('server run');
});