const User = {
    name: 'Ambuj Kumar',
    email: 'anskansd@xyz.com',
    isActive: true
}

console.log(User.name);

function createUser({name: string, isActive: boolean}){
}

createUser({name:'Ambuj', isActive:false});

function createCouse():{name: string, price: number}
{
    return {name:'react',price:10};
}


//type alias
// type User = {
//     name:string,
//     email:string,
//     isActive:boolean
// }

// function createNewUser(user: User): User
// {
//     return user;
// }

type User = {
    readonly _id: number,
    name: string,
    email: string,
    isActive: boolean,
    credCardDetails?: number
}

let myUser: User = {
    _id: 12345,
    name: 'Ambuj Kumar',
    email: 'anskansd@xyz.com',
    isActive: true
}

myUser.email = 'ak@xyz.com';

type cardNumber = {
    cardNumber: string
}
type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}



export {}