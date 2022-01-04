import db from '../../db';

const roomsService={
    getAllRooms:()=>{
        const {rooms} =db;
        return rooms;
    },
    getRoomById:(id: number)=>{
        const room=db.rooms.find((element)=>element.roomID===id);
        return room;

    },
    createRoom:(nr:number)=>{
        const roomID = db.rooms.length+1;
        db.rooms.push({
            roomID,
            nr
        });
        return roomID;
    },
    deleteRoom:(id: number): boolean=>{
        const index =db.rooms.findIndex((element)=>element.roomID===id);
        db.rooms.splice(index, 1);
        return true;
    },
    updateRoom:(data:{id:number, nr?:number}): boolean=>{
        const {id, nr}=data;
        const index =db.rooms.findIndex((element)=>element.roomID===id);
        if (nr){
            db.rooms[index].nr=nr;
        }
       
        return true;
    }

};
export default roomsService;