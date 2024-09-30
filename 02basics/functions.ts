function signUpuser(name:string, email:string, isPaid:boolean){
    return true;
}

signUpuser('Ambuj Kumar', 'anskansd@xyz.com', true);

function add(a:number, b:number): number
{
    return a+b
}

add(1,2);

// function getValue(newVal: number): number
// {
//     if(newVal > 5){
//         return true;
//     }

//     return '200 Ok';
// }

const getValue = (s:string):string => '200 Ok';

const hero = [2,'ambuj','spiderman'];

hero.map((hero): string | number => {
    return `hero is ${hero}`;
});

function consoleError(errMessage: string): void
{
    console.log(errMessage);
}

function handleError(errMessage: string): never
{
    throw new Error(errMessage);
}

export {}