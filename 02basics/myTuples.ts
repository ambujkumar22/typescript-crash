// const user: (string | number)[] = [1,'hc'];
let user: [string, number, boolean] = ['ambuj', 123, true];
user  = ['asdasd', 555, false];

let rgb: [number, number, number] = [255, 255, 255];

type User = [number, number, string];
const newUser: User = [1, 2, 'ambuj'];

// user[1] = 'abcd';

user.push(true);

export {}