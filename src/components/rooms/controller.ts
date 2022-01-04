import express, {Request, Response, Application, request} from 'express';
import responseCodes from '../general/responseCodes';
import db from '../../db';
import roomsService from './service';

const roomsControllers={
    getAllRooms:(req: Request,res: Response )=>{
        return res.status(responseCodes.ok).json({
            rooms:db.rooms,
        });
    },
   getRoomById : (req: Request,res: Response )=>{
        const id:  number = parseInt(req.params.id);
        const room=db.rooms.find((element)=>element.roomID===id);
        if(!room){
            return res.status(responseCodes.badRequest).json({
                 message: `Sellise id-ga ${id} ruumi ei ole!`
             });
         }
         return res.status(responseCodes.ok).json({
             room,
        });
    },
    createRoom : (req: Request, res: Response)=>{
        const {nr}=req.body;
        const roomID=db.rooms.length+1;
        db.rooms.push({
            roomID,
            nr,
        });
        return res.status(responseCodes.created).json({
            roomID
        });
    },
    deleteRoom:(req: Request, res: Response)=>{
        const id: number=parseInt(req.params.id,10);
        if(!id){
            return res.status(responseCodes.badRequest).json({
                error: 'No valid id provide',
            });
        }
        const room=roomsService.getRoomById(id);
        if(!room){
            return res.status(responseCodes.badRequest).json({
                message: 'Room not found'
            });
        }
        roomsService.deleteRoom(id);
        return res.status(responseCodes.noContent).json({});
    },
    uptadeRoom:(req: Request, res: Response)=>{
        const id: number=parseInt(req.params.id,10);
        const {nr}=req.body;
        if(!id){
            return res.status(responseCodes.badRequest).json({
                error: 'No valid',
            });

        }
        if(!nr){
            return res.status(responseCodes.badRequest).json({
                error: 'Nothing to update'
            });
        }
        const room=roomsService.getRoomById(id);
        if(!room){
            return res.status(responseCodes.badRequest).json({
                message: 'Room not found'
            });
        }
        roomsService.updateRoom({id,nr});
        return res.status(responseCodes.noContent).json({});
    },

};
export default roomsControllers;