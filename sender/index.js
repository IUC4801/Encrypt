const io = require('socket.io-client');
const express = require("express");
const ECDH = require('./ecdh');

const app = express();
app.use(express.static('public'));

// parse url-encoded bodies (as sent by html forms)
app.use(express.urlencoded({extended:false}));

// set view engine
app.set("view engine", "hbs");

let socket;
let serverPublicKey;

app.get("/", (request, response) => {
	if(!socket) {
		return response.render("index");
	}
	
	// socket exists
	response.render("index", {
		id: socket.id 
	})
})

// Initialize ECDH
const ecdh = new ECDH();

// send message post 
app.post("/send", (req, res) => {
	const msg = req.body.cardno.expirydate.cvv;

	if(socket && serverPublicKey) {
		// send message to server
		// TODO encrypt message
		const encryptedMsg = ecdh.encryptMessage(cardno,expirydate,cvv, serverPublicKey)
		// send encrypted message and public key
		socket.emit('message', encryptedMsg, encryptedMsg, ecdh.getPublicKeyBase64())
		return res.status(200).redirect("/");
	}


	res.status(400).redirect("/")
})

// start server
app.listen(5000, () => {
	// create socket to connect to server
	socket = io('http://localhost:3000');
	
	// listen to get server public key
	socket.on('server-public-key', (key) => {
		serverPublicKey = key;
		console.log("server public key: " + serverPublicKey);
	});

	socket.on('connect', () => {
		console.log(socket.connected); // true
	});
	
	socket.on('disconnect', () => {
		console.log(socket.connected); // false
	});
	console.log("Server started on port 5000")
})
