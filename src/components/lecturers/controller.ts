import express, {Request, Response, Application, request} from 'express';
import responseCodes from '../general/responseCodes';
import db from '../../db';
import lecturersService from './service';


const lecturersControllers={
    getAllLecturers : (req: Request,res: Response )=>{
    const lecturers = lecturersService.getAllLecturers();    
    return res.status(responseCodes.ok).json({
        lecturers,
    });
},
    getLecturerById : (req: Request,res: Response )=>{
    const id:  number = parseInt(req.params.id);
    const lecturer= lecturersService.getLecturerById(id);
    if(!lecturer){
       return res.status(responseCodes.badRequest).json({
            message: `Sellise id-ga ${id} õppejõudu ei ole!`
        });
    }
    return res.status(responseCodes.ok).json({
        lecturer,
    });
},
    createLecturer : (req: Request, res: Response)=>{
    const {firstName,lastName}=req.body;
    const ID=lecturersService.createLecturer(firstName,lastName);
    return res.status(responseCodes.created).json({
        ID
    });
},
    deleteLecturer : (req: Request, res: Response) =>{
        const id: number=parseInt(req.params.id,10);
        if(!id){
            return res.status(responseCodes.badRequest).json({
                error: 'No valid id provided',
            });
        }
        const lecturer=lecturersService.getLecturerById(id);
        if(!lecturer){
            return res.status(responseCodes.badRequest).json({
                message: 'User not found'
            });
        }
        lecturersService.deleteLecturer(id);
        return res.status(responseCodes.noContent).json({});

},

    updateLecturer :(req: Request, res: Response) =>{
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
        const lecturer=lecturersService.getLecturerById(id);
        if(!lecturer){
            return res.status(responseCodes.badRequest).json({
                message: 'User not found'
            });
        }
        lecturersService.updateLecturer({id,firstName,lastName});
        return res.status(responseCodes.noContent).json({});
}
};
export default lecturersControllers;