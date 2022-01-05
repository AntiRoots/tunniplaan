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
    users:[
        {
        userID:1,
        firstName:"Mauno",
        lastName: "Malva",
        email:"malva@malva.ee",
        password: "$2b$10$9dxAOVLOoHnub5K0EdbZn.c0p5ojpgO72UtGElTm4nEIdusiChGJG",
        role:'Admin'
        
        },
        {
        userID:2,
        firstName:"Pille",
        lastName: "Pilv",
        email: "pilv@pilv.ee",
        password: "$2b$10$rgfrrhbfxfHErcROPH0CN.0MV.HHOL/bhGBB/LTy9iutJcT7n45rC",
        role:'User'
        
      
        },
        {
        userID: 3,
        firstName: "Mille",
        lastName: "Milv",
        email: "milv@milv.ee",
        password: "$2b$10$tL7JIRhfSqol2llIuneqNOSa6iomRFV5zm6S6HqIBuGB6JhrMTpEy",
        role:'User'
        
          },
    ]

}
export default db;