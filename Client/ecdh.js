const crypto = require('crypto');
const aes256 = require('aes256');

class ECDH {
	constructor() {
		this.ecdh = crypto.createECDH("secp256k1");
		this.ecdh.generateKeys();
	}
	getPublicKeyBase64() {
		return this.ecdh.getPublicKey().toString('base64');
	}
	computeSharedSecret(otherPublicKey) {
		return this.ecdh.computeSecret(otherPublicKey, 'base64', 'hex');
	}
	// encrypt message
	encryptMessage(msg, otherPublicKey) {
		// compute shared secret with other public key
		const sharedSecret = this.computeSharedSecret(otherPublicKey);
		// encrypt message with shared key
		const encryptedMessage = aes256.encrypt(sharedSecret, msg);
		return encryptedMessage;
	}
	// decrypt message
	decryptMessage(encryptedMsg, otherPublicKey) {
		// compute shared secret with other public key
		const sharedSecret = this.computeSharedSecret(otherPublicKey);
		// decrypt message with shared key
		const decryptedMessage = aes256.decrypt(sharedSecret, encryptedMsg);
		return decryptedMessage;
	}
}

module.exports = ECDH;