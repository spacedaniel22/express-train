// console.log("Hello NodeJS!");
const http = require("http");

class Person {
    constructor(name) {
        this.name = name;
    }

    greeting() {
        return `Hello, my nam is, ${ this.name }`; 
    }
}

const responder = (req, res) => {
    logger("message:", "asd", "sdgdthjdtfj", "lkfdnjhdtobin", "Hola");
    res.end("Hello NodeJs!");
}

const logger = (key = "logger:", ...messages) => {
    // messages.map(message => console.log(key, message));
    for (let index in messages) {
        console.log(key, messages[index]);
    }
}

const server = http.createServer((req, res) => {
    responder(req, res);
});

server.listen(8080);