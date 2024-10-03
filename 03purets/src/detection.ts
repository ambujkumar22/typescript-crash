function detectType(val: number | string)
{
    if(typeof val === 'string'){
        return val.toLowerCase();
    }

    return val + 1;
}

function provideId(id: string | null)
{
    if(!id){
        console.log('Please provide id');
        return;
    }

    return id.toLowerCase();
}

function printAll(strs: string | string[] | null): void
{
    if(strs){
        if(typeof strs === 'object'){
            for(const s of strs){
                console.log(s);
            }
        } else if(typeof strs === 'string'){
            console.log(strs);
        }
    }
}
console.log(printAll(null));

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin): boolean
{
    if("isAdmin" in account){
        return account.isAdmin;
    }

    return false;
}

function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish
{
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet;
        return "Fish food";
    } else {
        pet;
        return "Bird food";
    }
}

//descriminated union

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

interface Rectrangle {
    kind: "rectangle";
    length: number;
    width: number;
}

type Shape = Circle | Square | Rectrangle;
function defineShape(shape: Shape): number
{
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2;
    } else if(shape.kind === "square"){
        return shape.side ** 2;
    } else {
        return shape.length * shape.width;
    }
}