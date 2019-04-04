class Person {
    constructor(name) {
        this.name = name;
    }

    greeting() {
        return `Hello, my nam is, ${ this.name }`; 
    }
}

const jack = new Person("Jack");
const linda = new Person("Linda");