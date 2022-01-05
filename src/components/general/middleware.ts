import { Request, Response, NextFunction } from 'express';

const createLectureValidator=(req:Request, res:Response,next:NextFunction)=>{
    const {firstName, lastName}=req.body;
    if(!firstName){
        return res.status(400).json({
            message: 'No lecturer firstname add!'
        });
    }
    if(!lastName){
        return res.status(400).json({
            message: 'No lecturer lasttname add!'
        });
    }
    return next();
};
const logger=(req:Request,res:Response, next:NextFunction)=>{
    console.log(`${req.url}, ${new Date().toISOString()}`);
    next();
};
export {logger, createLectureValidator};