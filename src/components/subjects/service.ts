import db from '../../db';

const subjectsService={
getAllSubjects:()=>{
    const {subjects}=db;
    return subjects;
},
getSubjectById:(id: number)=>{
    const subject=db.subjects.find((element)=>element.subID===id);
    return subject;
},
createSubject:(name:string)=>{
    const subID =db.subjects.length+1;
    db.subjects.push({
        subID,
        name
    });
    return subID;
},
deleteSubject:(id:number)=>{
    const index=db.subjects.findIndex((element)=>element.subID===id);
    db.subjects.splice(index,1);
    return true;
},
updateSubject:(data:{id:number,name?:string})=>{
    const {id,name}=data;
    const index =db.subjects.findIndex((element)=>element.subID===id);
    if(name){
        db.subjects[index].name=name;
    }
    return true;
},
};
export default subjectsService;