"use strict";
class User {
    constructor(name, email) {
        this.city = "Faridabad";
        this.name = name;
        this.email = email;
    }
    getName() {
        return this.name;
    }
}
const ambuj = new User('Ambuj Kumar', 'ambuj@abcd.com');
// console.log(ambuj.city); // cannot access because it is private
//shortcut method
class Admin {
    constructor(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
        this.city = "Faridabad";
        this._count = 1;
        this.name = name;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    get getAppleEmail() {
        return "Apple - " + this.email;
    }
    set increment(courseNumber) {
        this._count += courseNumber;
    }
    get getCount() {
        return this._count;
    }
}
const host = new Admin('host', 'host@xyz.com', 123);
console.log(host.getAppleEmail);
console.log(host.getCount);
host.increment = 1;
console.log(host.getCount);
