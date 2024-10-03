function identityOne(val: string): string
{
    return val;
}

function identityTwo(val: any): any
{
    return val;
}

function identityThree<Type>(val: Type): Type
{
    return val;
}

function identityFour<T>(val: T): T
{
    return val;
}

interface Brand {
    type: string,
    name: string
}

function identityFive<Brand>(val: {type: string, name: string}): Brand
{
    return val as Brand;
}

identityThree('One');
identityFive({type:'abcd',name:'lklkkl'});

function getSearchProduct<T>(products: T[]): T
{
    //do some database operations
    const MyIndex = 3;
    return products[MyIndex];
}

const getMoreSeachProducts = <T>(products: T[]): T => {
    //do some database operations
    return products[0];
}

function anotherFunction<T, U extends Brand>(val: T, val2: U): object
{
    return {val, val2};
}

anotherFunction('One', {type:'abcd',name:'lklkkl'});

interface Quiz {
    name: string,
    type: number
}

interface Course {
    subject: string,
    teacher: string
}

class Sellable<T>{
    public cart: T[] = [];

    addToCart(val: T){
        this.cart.push(val);
    }
}