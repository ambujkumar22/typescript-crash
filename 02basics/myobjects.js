"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'Ambuj Kumar',
    email: 'anskansd@xyz.com',
    isActive: true
};
console.log(User.name);
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
createUser({ name: 'Ambuj', isActive: false });
function createCouse() {
    return { name: 'react', price: 10 };
}
var myUser = {
    _id: 12345,
    name: 'Ambuj Kumar',
    email: 'anskansd@xyz.com',
    isActive: true
};
myUser.email = 'ak@xyz.com';
