import express, {Request, Response, Application, request} from 'express';
import responseCodes from '../general/responseCodes';
import db from '../../db';
import subjectsService from './service';

const subjectsControllers={
getAllSubjects:(req: Request,res: Response )=>{
    return res.status(responseCodes.ok).json({
        subjects:db.subjects,
    });
},
getSubjectById: (req: Request,res: Response )=>{
    const id:  number = parseInt(req.params.id);
    const subject=db.subjects.find((element)=>element.subID===id);
    if(!subject){
        return res.status(responseCodes.badRequest).json({
             message: `Sellise id-ga ${id} õppainet ei ole!`
         });
     }
     return res.status(responseCodes.ok).json({
    });
},
createSubject: (req: Request, res: Response)=>{
    const {name}=req.body;
    const subID=db.subjects.length+1;
    db.subjects.push({
        subID,
        name,
    });
    return res.status(responseCodes.created).json({
        subID
    });
},
deleteSubject:(req: Request, res: Response)=>{
    const id: number=parseInt(req.params.id,10);
    if(!id){
        return res.status(responseCodes.badRequest).json({
            error: 'No valid id provided',
        });
    }
    const subject=subjectsService.getSubjectById(id);
    if(!subject){
        return res.status(responseCodes.badRequest).json({
            message: 'Subject not found'
        });
    }
    subjectsService.deleteSubject(id);
    return res.status(responseCodes.noContent).json({});
},
updateSubject:(req: Request, res: Response)=>{
    const id: number=parseInt(req.params.id,10);
    const {name}=req.body;
    if(!id){
        return res.status(responseCodes.badRequest).json({
            error: 'No valid',
        });

    }
    if(!name){
        return res.status(responseCodes.badRequest).json({
            error: 'Nothing to update'
        });
    }
    const subject=subjectsService.getSubjectById(id);
    if(!subject){
        return res.status(responseCodes.badRequest).json({
            message: 'Subject not found'
        });
    }
    subjectsService.updateSubject({id,name});
    return res.status(responseCodes.noContent).json({});

},
};
export default subjectsControllers;