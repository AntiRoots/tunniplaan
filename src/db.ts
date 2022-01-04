const db={
    lecturers:[
        {
        ID:1,
        firstName: 'Aady',
        lastName: 'Juurikas'
        },
        {
        ID:2,    
        firstName: 'Mari',
        lastName: 'Muda'
        },
    ],
    courses:[
        {
            corID: 1, 
            shortName:"KTD1",
            corName: "Käsitöölised",
        },
        {
            corID:2,
            shortName:"LO1",
            corName: "Liiklusohutus",
        }
    ],
    subjects:[
        { 
            subID:1,
            name:'Prog_I',
            
        },
        {
            subID:2,
            name:'Prog_II',
           
        }
    ],
    rooms:[
        {
        roomID:1,
        nr:205,
        },
        {
        roomID:2,
        nr:301, 
      
        },
    ],

}
export default db;