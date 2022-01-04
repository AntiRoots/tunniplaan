import db from '../../db';


const lecturersService ={
    getAllLecturers:()=>{
        const {lecturers} =db;
        return lecturers;
    },
    getLecturerById:(id: number)=>{
        const lecturer=db.lecturers.find((element)=>element.ID===id);
        return lecturer;

    },
    createLecturer:(firstName:string, lastName:string)=>{
        const ID = db.lecturers.length+1;
        db.lecturers.push({
            ID,
            firstName,
            lastName
        });
        return ID;
    },
    deleteLecturer:(id: number): boolean=>{
        const index =db.lecturers.findIndex((element)=>element.ID===id);
        db.lecturers.splice(index, 1);
        return true;
    },
    updateLecturer:(data:{id:number, firstName?:string, lastName?:string}): boolean=>{
        const {id, firstName,lastName}=data;
        const index =db.lecturers.findIndex((element)=>element.ID===id);
        if (firstName){
            db.lecturers[index].firstName=firstName;
        }
        if (lastName){
            db.lecturers[index].lastName=lastName;
        }
        return true;
    }
};

export default lecturersService;