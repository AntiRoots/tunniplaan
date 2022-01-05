interface NewUser{
    email:string;
    password:string;
    firstName:string;
    lastName:string;
    role: 'Admin' | 'User';
}
interface User extends NewUser{
    userID:number
}
export {NewUser, User};
