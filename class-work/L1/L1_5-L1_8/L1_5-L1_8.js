"use strict";
class User {
    constructor(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
    greeting() {
        console.log('asdfs');
    }
    ;
}
let user = new User('asd', 123, false);
let users = [
    new User('adasdf', 1234, true)
];
console.log(users);
