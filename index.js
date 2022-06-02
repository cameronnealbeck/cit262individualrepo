import express from 'express';
import bodyParser from 'body-parser';

const application = express();

application.use(bodyParser.json());

application.get('/',(req,res)=>{res.send("Hello")});

application.post('/login',(loginRequest,loginResponse)=>{
    const userName = loginRequest.body.userName;
    const password = loginResponse.body.password;

    if (userName=="hatersgonnahate@byui.edu" && password=="P@ssw0rd"){
        loginResponse.status(200);
        loginResponse.send({Status:"LoggedIn"});
    } else{
        loginResponse.status(403);
        loginResponse.send({Status:"FailedLoggingIn"});
    }
});

application.listen(3000,()=>{console.log("Listening...")});