import express, { request } from "express"
import {PORT,MongoDBURL} from "./config.js"
import mongoose, { connect } from "mongoose";
import {Book} from "./models/book-models.js"

const app=express();

app.use(express.json());// Middleware for parsing the request body

app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send('Welcome to Sajals project')
})

// Below mentioned code is to create a GET endpoint to fetch all books, this was done purely for understanding purposes
app.get('/books', async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).send({
            count: books.length,
            data:books
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

app.post('/books',async (req,res)=>{
    try{
        if(  !req.body.title||
            !req.body.author||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message:'Send all required fields: title, author, publishYear',
            });
        }
        const newBook={
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear

        };
        const book=await Book.create(newBook); 

        return res.status(201).send(book);
    }
    catch(error){
        console.log(error.message) 
        res.status(500).send({message:error.message})
    }
})

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