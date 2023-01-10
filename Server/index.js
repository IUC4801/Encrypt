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

	// listening for incoming card-info
	socket.on('card-info', (encryptedCardInfo, publicKey) => {
		// TODO decrypt message
		console.log(encryptedCardInfo)
		const decryptedCardno = ecdh.decryptMessage(encryptedCardInfo.encryptedCardno, publicKey);
		const decryptedExpirydate = ecdh.decryptMessage(encryptedCardInfo.encryptedExpirydate, publicKey);
		const decryptedCvv = ecdh.decryptMessage(encryptedCardInfo.encryptedCvv, publicKey);
		// create an object with all the encrypted and decrypted card info
		const cardInfo = {
			encryptedCardno: encryptedCardInfo.encryptedCardno,
			decryptedCardno: decryptedCardno,
			encryptedExpirydate: encryptedCardInfo.encryptedExpirydate,
			decryptedExpirydate: decryptedExpirydate,
			encryptedCvv: encryptedCardInfo.encryptedCvv,
			decryptedCvv: decryptedCvv
		}
		// broadcast decrypted card info to local client
		socket.broadcast.emit('display-card-info', cardInfo);
	})

	// listening for the client disconnect
	socket.on('disconnect', reason => {
		// broadcast the id to other client sockets
		console.log("Disconnected: " + socket.id);
	});
});