import db from '../../db';

const coursesService={
getAllCourses:() =>{
    const {courses}=db;
    return courses;
},
getCourseById :(id:number) =>{
    const course=db.courses.find((element)=>element.corID===id);
    return course;
},
createCourse :(shortName: string,corName: string) =>{
    const corID=db.courses.length+1;
    db.courses.push({
        corID,
        shortName,
        corName
    });
    return corID;
},
deleteCourse:(id:number): boolean=>{
    const index =db.courses.findIndex((element)=>element.corID==id);
    db.courses.splice(index, 1);
    return true;
},
updateCourse:(data:{id:number, shortName?:string,corName?:string}):boolean=>{
    const {id,shortName,corName}=data;
    const index =db.courses.findIndex((element)=>element.corID==id);
    if(shortName){
        db.courses[index].shortName=shortName;
        }
    if(corName){
        db.courses[index].corName=corName;
    }    
    return true;
}
};
export default coursesService;