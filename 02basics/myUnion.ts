let score: number | string = 33;
score = 123;
score = '335';

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let ambuj: User | Admin = {
    name: 'Ambuj',
    id: 123
}
ambuj = {username: 'Ambuj', id: 123};


function getDBId(id: number | string): void
{
    console.log(`DB id is: ${id}`);
    
    if(typeof id === 'string'){
        id.toLocaleLowerCase();
    }
}

getDBId(2);
getDBId("ambuj");

//arrays
const data: number[] = [1,2,3];
const data2: string[] = ['1','2','3'];
const data3: (string | number | boolean)[] = [1,2,3,'4',true];

let seatAllotment: 'aisle' | 'middle' | 'window';
seatAllotment = 'aisle';
// seatAllotment = 'crew'; this will give error

export {}