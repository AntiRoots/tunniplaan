import express, {Request, Response, Application, request} from 'express';
import responseCodes from '../general/responseCodes';
import db from '../../db';
import usersService from './service';
import { NewUser } from './interfaces';



const usersControllers={
    getAllusers : (req: Request,res: Response )=>{
    const users = usersService.getAllUsers();    
    return res.status(responseCodes.ok).json({
        users,
    });
},
    getUserById : (req: Request,res: Response )=>{
    const id:  number = parseInt(req.params.id);
    const user= usersService.getUserById(id);
    if(!user){
       return res.status(responseCodes.badRequest).json({
            message: `Sellise id-ga ${id} kasutajat ei ole!`
        });
    }
    return res.status(responseCodes.ok).json({
        user,
    });
},
    createUser : async (req: Request, res: Response)=>{
    const {firstName,lastName,email,password}=req.body;
    //const userID=usersService.createUser(firstName,lastName,password,email);
    const newUser: NewUser={
        firstName,
        lastName,
        email,
        password,
        role: 'User'
    }
    const userID = await usersService.createUser(newUser);
    return res.status(responseCodes.created).json({
        userID
    });
},
    deleteUser : (req: Request, res: Response) =>{
        const id: number=parseInt(req.params.id,10);
        if(!id){
            return res.status(responseCodes.badRequest).json({
                error: 'No valid id provided',
            });
        }
        const user=usersService.getUserById(id);
        if(!user){
            return res.status(responseCodes.badRequest).json({
                message: 'User not found'
            });
        }
        usersService.deleteUser(id);
        return res.status(responseCodes.noContent).json({});

},

    updateUser :(req: Request, res: Response) =>{
        const id: number=parseInt(req.params.id,10);
        const {firstName, lastName}=req.body;
        if(!id){
            return res.status(responseCodes.badRequest).json({
                error: 'No valid',
            });

        }
        if(!firstName && !lastName){
            return res.status(responseCodes.badRequest).json({
                error: 'Nothing to update'
            });
        }
        const user=usersService.getUserById(id);
        if(!user){
            return res.status(responseCodes.badRequest).json({
                message: 'User not found'
            });
        }
        usersService.updateUser({id,firstName,lastName});
        return res.status(responseCodes.noContent).json({});
}
};
export default usersControllers;