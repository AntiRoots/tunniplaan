interface NewUser{
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    role: string;
}

interface User extends NewUser{
    userID:number
}
export {NewUser, User};
