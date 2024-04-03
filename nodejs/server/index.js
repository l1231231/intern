const express = require('express');
const cors = require('cors');
require('dotenv').config()

const initRoute= require('./src/routes')

const app = express();
const names=[
    {
        name:'nam',
        age:'18',
    },
    {
        name:'Lan',
        age:'20'
    },
    {
        name:'Hung',
        age:'40'
    }
]
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET','POST','PUT','DELETE']
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

initRoute(app);
app.get('/message',(req,res)=>{
    res.json({message:'Hello'});
});
app.get('/name',(req,res)=>{

    res.json(names.map(person=>person.name))
});

const PORT =process.env.PORT || 8888
const listener= app.listen(PORT,()=>{
    console.log('connected on port '+ listener.address().port);
});