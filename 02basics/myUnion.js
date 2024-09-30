"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 123;
score = '335';
var ambuj = {
    name: 'Ambuj',
    id: 123
};
ambuj = { username: 'Ambuj', id: 123 };
function getDBId(id) {
    console.log("DB id is: ".concat(id));
    if (typeof id === 'string') {
        id.toLocaleLowerCase();
    }
}
getDBId(2);
getDBId("ambuj");
//arrays
var data = [1, 2, 3];
var data2 = ['1', '2', '3'];
var data3 = [1, 2, 3, '4', true];
var seatAllotment;
seatAllotment = 'aisle';
