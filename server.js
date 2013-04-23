var io = require('socket.io').listen(process.env.port);
 
io.sockets.on('connection', function (socket) {
 
socket.on('message', function (message) {
console.log("Got message: " + message);
io.sockets.emit('pageview', { 'url': message });
});
 
});
