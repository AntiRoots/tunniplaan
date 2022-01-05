import express, {Request, Response, Application,} from 'express';
import db from './db';
import lecturersControllers from './components/lecturers/controller';
import responseCodes from './components/general/responseCodes';
import {logger, createLectureValidator} from './components/general/middleware';
import coursesControllers from './components/courses/controller';
import subjectsControllers from './components/subjects/controller';
import roomsControllers from './components/rooms/controller';
import usersControllers from './components/users/controller';
import authController from './components/auth/controller';

const app: Application=express();
app.use(express.json());
app.use(logger);
const port: number=3000;





app.get('/ping', (req: Request,res: Response )=>{
    return res.status(responseCodes.ok).json({
        message: 'Olete sisenenud tunniplaani API'
    });
});
//login
app.post('/login', authController.login);

//lecturers
app.get('/lecturers',lecturersControllers.getAllLecturers);
app.get('/lecturers/:id',lecturersControllers.getLecturerById);
app.post('/lecturers', createLectureValidator, lecturersControllers.createLecturer );
app.delete('/lecturers/:id',lecturersControllers.deleteLecturer);
app.patch('/lecturers/:id', lecturersControllers.updateLecturer);


//courses
app.get('/courses',coursesControllers.getAllCourses );
app.get('/courses/:id',coursesControllers.getCourseById );
app.post('/courses',coursesControllers.createCourse );
app.delete('/courses/:id',coursesControllers.deleteCourse);
app.patch('/courses/:id',coursesControllers.updateCourse);

//subjects
app.get('/subjects',subjectsControllers.getAllSubjects );
app.get('/subjects/:id',subjectsControllers.getSubjectById);
app.post('/subjects',subjectsControllers.createSubject);
app.delete('/subjects/:id',subjectsControllers.deleteSubject);
app.patch('/subjects/:id',subjectsControllers.updateSubject);


//rooms
app.get('/rooms',roomsControllers.getAllRooms);
app.get('/rooms/:id',roomsControllers.getRoomById);
app.post('/rooms', roomsControllers.createRoom);
app.delete('/rooms/:id', roomsControllers.deleteRoom);
app.patch('/rooms/:id', roomsControllers.uptadeRoom);

//users
app.get('/users', usersControllers.getAllusers);
app.get('/users/:id', usersControllers.getUserById);
app.post('/users', usersControllers.createUser);
app.delete('/users/:id',usersControllers.deleteUser);
app.patch('/users/:id', usersControllers.updateUser);


app.listen(port, ()=>{
    console.log('Server is running');
})