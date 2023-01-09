const socket = io();
socket.on('display-msg', showMessage);

function showMessage(encryptedMsg, decryptedMsg) {
	// get message container
	const container = document.getElementById("msg-container");
	// append new message to container
	container.innerHTML += `<h5>New Message Received</h5>`
	container.innerHTML += `<p>Encrypted message: ${encryptedMsg}</p>`
	container.innerHTML += `<p>Decrypted message: ${decryptedMsg}</p>`
	container.innerHTML += `<hr>`
}