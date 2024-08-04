import express, { request } from "express"
import cors from "cors"
import {PORT,MongoDBURL} from "./config.js"
import mongoose, { connect } from "mongoose";
import {Book} from "./models/book-models.js"
import router from "./routes/booksRoute.js"

const app=express();

app.use(cors({
    origin: 'http://localhost:5173', // The origin of your React app
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
  })); // Enable CORS

app.use(express.json());// Middleware for parsing the request body

app.get('/',(req,res)=>{
    console.log(req);
    return res.status(200).send('Welcome to Sajals project')
})
app.use('/books',router)

mongoose
.connect(MongoDBURL) 
.then(()=>{
    console.log('App connected to database');

app.listen(PORT,()=>{ //this is done so that out express server only runs when the data base connection is established
    console.log(`The App is Listening to PORT ${PORT}`);
})
})
.catch((error)=>{
    console.log(error);
})