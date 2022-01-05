import db from '../../db';
import { NewUser, User } from './interfaces';
import hashService from '../general/hashService';


const usersService ={
    getAllUsers:()=>{
        const {users} =db;
        return users;
    },
    getUserById:(id: number)=>{
        const user=db.users.find((element)=>element.userID===id);
        return user;

    },
    getUserByEmail:(email:string) => {
        const user =db.users.find((element)=>element.email===email);
        return user;
    },
    createUser: async (newUser: NewUser)=>{
        const userID = db.users.length+1;
        const hashedPassword  = await  hashService.hash(newUser.password);
        const user: User= {
            userID,
            ...newUser,
            password:hashedPassword
        };
        db.users.push(user);
        return userID;
    },
    deleteUser:(id: number): boolean=>{
        const index =db.users.findIndex((element)=>element.userID===id);
        db.users.splice(index, 1);
        return true;
    },
    updateUser:(data:{id:number, firstName?:string, lastName?:string}): boolean=>{
        const {id, firstName,lastName}=data;
        const index =db.users.findIndex((element)=>element.userID===id);
        if (firstName){
            db.users[index].firstName=firstName;
        }
        if (lastName){
            db.users[index].lastName=lastName;
        }
        return true;
    }
};

export default usersService;