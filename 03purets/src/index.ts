class User {
    public email: string;
    public name: string;
    private city: string = "Faridabad";

    constructor(
        name: string,
        email: string
    ){
        this.name = name;
        this.email = email
    }

    public getName(): string
    {
        return this.name;
    }
}

const ambuj = new User('Ambuj Kumar', 'ambuj@abcd.com');
// console.log(ambuj.city); // cannot access because it is private

//shortcut method
class Admin {
    private city: string = "Faridabad";
    private _count: number = 1;

    constructor(
        public name: string,
        public email: string,
        private userId: number
    ){
        this.name = name;
        this.email = email;
    }

    public getName(): string
    {
        return this.name;
    }

    get getAppleEmail(): string
    {
        return "Apple - " + this.email;
    }

    set increment(courseNumber: number)
    {
         this._count += courseNumber;
    }

    get getCount(): number
    {
        return this._count;
    }
}

const host = new Admin('host','host@xyz.com', 123);

console.log(host.getAppleEmail);
console.log(host.getCount);
host.increment = 1;
console.log(host.getCount);