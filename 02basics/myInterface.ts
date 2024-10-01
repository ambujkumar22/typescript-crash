interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    gclid?: string,
    startTrial: () => void | string,
    getCoupon: (coupon: string) => number
}

//repoening the Interface
interface User {
    githubToken: string
}

interface Admin extends User {
    role: 'admin' | 'ta' | 'learner';
}

const ambuj: User = {
    githubToken: "abcd new token",
    dbId:12312,
    email: 'anskansd@xyz.com',
    userId: 123,
    startTrial: () => {
        return "true";
    },
    getCoupon: (coupon = "ambuj123") => {
        return 123;
    }
}

const admin: Admin = {
    githubToken: "abcd new token",
    dbId:123,
    email: 'admin@xyz.com',
    userId: 1,
    role: 'admin',

    startTrial: () => {
        return "false";
    },
    getCoupon: (coupon = "ambuj123") => {
        return 1;
    }
}


export {}