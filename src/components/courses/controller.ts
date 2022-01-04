import express, {Request, Response, Application, request} from 'express';
import responseCodes from '../general/responseCodes';
import db from '../../db';
import coursesService from './service';

const coursesControllers={
getAllCourses:(req: Request,res: Response )=>{
    const courses=coursesService.getAllCourses();
    return res.status(responseCodes.ok).json({
        courses,
    });
},
getCourseById:(req: Request,res: Response )=>{
    const id:  number = parseInt(req.params.id);
    const course=coursesService.getCourseById(id);
    if(!course){
        return res.status(responseCodes.badRequest).json({
             message: `Sellise id-ga ${id} kursust ei ole!`
         });
     }
    return res.status(responseCodes.ok).json({
        course,
    });
},
createCourse:(req: Request, res: Response)=>{
    const {shortName,corName}=req.body;
    const corID=coursesService.createCourse(shortName,corName);
    return res.status(responseCodes.created).json({
        corID
    });
},
deleteCourse:(req: Request, res: Response)=>{
    const id: number=parseInt(req.params.id,10);
    if(!id){
        return res.status(responseCodes.badRequest).json({
            error: 'No valid id provided',
        });
    }
    const course=coursesService.getCourseById(id);
    if(!course){
        return res.status(responseCodes.badRequest).json({
            message: 'User not found'
        });
    }
    coursesService.deleteCourse(id);
    return res.status(responseCodes.noContent).json({});

},
updateCourse:(req: Request, res: Response)=>{
    const id: number=parseInt(req.params.id,10);
    const {shortName, corName}=req.body;
    if(!id){
        return res.status(responseCodes.badRequest).json({
            error: 'No valid',
        });

    }
    if(!shortName && !corName){
        return res.status(responseCodes.badRequest).json({
            error: 'Nothing to update'
        });
    }
    const course=coursesService.getCourseById(id);
    if(!course){
        return res.status(responseCodes.badRequest).json({
            message: 'User not found'
        });
    }
    coursesService.updateCourse({id,shortName,corName});
    return res.status(responseCodes.noContent).json({});

},
};
export default coursesControllers;