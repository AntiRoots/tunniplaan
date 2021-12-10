import express, {Request, Response, Application, request} from 'express';
const app: Application=express();
app.use(express.json());
const port: number=3000;
const ok: number=200;
const created: number=201;

const db={
    lecturers:[
        {
        id:1,
        firstName: 'Aady',
        lastName: 'Juurikas'
        },
        {
        id:2,    
        firstName: 'Mari',
        lastName: 'Muda'
        },
    ]
}

app.get('/ping', (req: Request,res: Response )=>{
    res.status(ok).json({
        message: 'Olete sisenenud tunniplaani API'
    });
});

app.get('/lecturers', (req: Request,res: Response )=>{
    res.status(ok).json({
        lecturers:db.lecturers,
    });
});

app.get('/lecturers/:id', (req: Request,res: Response )=>{
    const id:  number = parseInt(req.params.id);
    const lecturer=db.lecturers.find((element)=>element.id===id);
    res.status(ok).json({
    });
});

app.post('/lecturers', (req: Request, res: Response)=>{
    const {firstName,lastName}=req.body;
    const id=db.lecturers.length+1;
    db.lecturers.push({
        id,
        firstName,
        lastName
    });
    res.status(created).json({
        id
    });
});


app.listen(port, ()=>{
    console.log('Server is running');
})