const express = require("express");
const ECDH = require('./ecdh');

// initialize express
const app = express();
// server static files
app.use(express.static('public'));

// start server
const PORT = 3000;
const server = app.listen(PORT, () => {
	console.log(`Server is running at port ${PORT}`);
})

// initialize ecdh
const ecdh = new ECDH();

// socket setup
const io = require('socket.io')(server);
io.on('connection', socket => {
	console.log("New Connection: ", socket.id);

	// share public key to client
	io.emit('server-public-key', ecdh.getPublicKeyBase64());

	// listening for incoming messages
	socket.on('message', (msg, publicKey) => {
		// TODO decrypt message
		console.log(msg)
		const decryptedMsg = ecdh.decryptMessage(msg, publicKey);
		// broadcast decrypted msg to local client
		socket.broadcast.emit('display-msg', msg, decryptedMsg);
	})
	
	// listening for the client disconnect
	socket.on('disconnect', reason => {
		// broadcast the id to other client sockets
		console.log("Disconnected: " + socket.id);
	});
});