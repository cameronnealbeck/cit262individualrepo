import express from 'express';

const application = express();

application.get('/',(req,res)=>{res.send("Hello")});

application.listen(3000,()=>{console.log("Listening...")});