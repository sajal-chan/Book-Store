import express from "express"
import {PORT,MongoDBURL} from "./config.js"
import mongoose, { connect } from "mongoose";

const app=express();

app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send('Welcome to Sajals project')
})

app.listen(PORT,()=>{
    console.log(`The App is Listening to PORT ${PORT}`);
})

mongoose
.connect(MongoDBURL) 
.then(()=>{
    console.log('App connected to database');
})
.catch((error)=>{
    console.log(error);
})