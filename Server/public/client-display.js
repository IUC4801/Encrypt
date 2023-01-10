const socket = io();
socket.on('display-card-info', showMessage);

function showMessage(cardInfo) {
	// get message container
	const container = document.getElementById("msg-container");
	// append new message to container
	container.innerHTML += `<h4>Card Info Received</h4>`
	container.innerHTML += `<p>Encrypted card number: ${cardInfo.encryptedCardno}</p>`
	container.innerHTML += `<p>Decrypted card number: ${cardInfo.decryptedCardno}</p>`
	container.innerHTML += `<p>Encrypted expiry date: ${cardInfo.encryptedExpirydate}</p>`
	container.innerHTML += `<p>Decrypted expiry date: ${cardInfo.decryptedExpirydate}</p>`
	container.innerHTML += `<p>Encrypted CVV: ${cardInfo.encryptedCvv}</p>`
	container.innerHTML += `<p>Decrypted CVV: ${cardInfo.decryptedCvv}</p>`
	container.innerHTML += `<hr>`
}