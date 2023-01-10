# Encrypt - Online Banking Authentication method using ECDH Cryptography

## About The Project

Encrypt is an online banking authentication method which uses ECDH (Elliptic-curve Diffie–Hellman) as the main cryptographic algorithm. The project mainly aims strengthen the authentication process of banking systems as ECDH has a smaller key size as compared to RSA, which is mainly used in the current banking system and also provides better security. It mainly works on two parts - client and server. The client side takes the card information and send it to the server side. The server side decrypts the card information using ECDH cryptographic algorithm.

## Features

- ECDH is used as main cryptographic algorithm.
- Card options are made responsive and user-friendly using Jquery.
- Socket.io has been used to establish connection between client and server.
- SECP256K1 is implemented as the elliptic curve in the algorithm.
- Computation power is reduced and complexity of the algotithm has been increased.
- Interactive and responsive UI.
- Graphical and visual innovative effects are implemented.
- Latest technologies are used.


## Tech Stack

- `Frontend:` HTML, CSS, Javascript, Handlebars
- `Backend:` Nodejs, Expressjs, Socket.io Jquery

<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

Nodejs should be installed in the device. Along with Nodejs, any code editor should also be installed.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/IUC4801/Encrypt.git
   ```
   
2. After cloning this repository, migrate to ```Encrypt-clone``` folder. Run the following commands to run your app:
```bash
  cd sender
  npm i (to install all the dependencies)
  npm start
  Open [http://localhost:3000](http://localhost:3000) to open the client side.
```

```bash
  cd receiver
  npm i (to install all the dependencies)
  npm start
  Open [http://localhost:5000](http://localhost:5000) to open the server side.
```

## Machine configuration
- `OS:` Windows 10 64 bit
- `RAM:` 8 GB 
- `Processor:` 11th Gen Intel(R) Core(TM) i5


## Dependencies
* [Node.js](https://nodejs.org/en/)
* [Expressjs](https://expressjs.com/)
* [Socket.io](https://socket.io/)
* [Jquery](https://jquery.com/)
* [Handlebars](https://handlebarsjs.com/)

## Demo

![Github demo (1)](https://user-images.githubusercontent.com/61285140/211609176-fcba31b6-2648-4d59-b8f2-6d3601cdb796.mp4)

  
