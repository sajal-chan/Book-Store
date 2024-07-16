import express from 'express'
import {Book} from "../models/book-models.js"
const router=express.Router();

// Below mentioned code is to create a GET endpoint to fetch all books, this was done purely for understanding purposes
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).send({
            count: books.length,//this displays all the number of books int he DB at once 
            data:books//we can just simpy put this here instead of the object
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//This routing is to get a single book by its id
router.get('/:id', async (req, res) => {
    try {

        const { id }=req.params;

        const book = await Book.findById(id);
        res.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//this route is to create a new book
router.post('/',async (req,res)=>{
    try{
        if( !req.body.title||
            !req.body.author||
            !req.body.publishYear)
        {
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
});

//this route is to update an existing book
router.put('/:id',async(req,res)=>
{
    try{
        if( !req.body.title||
            !req.body.author||
            !req.body.publishYear)
        {
            return res.status(400).send({
                message:'Send all required fields: title, author, publishYear',
            });
        } 

        const {id}=req.params;

        const result=await Book.findByIdAndUpdate(id,req.body);

        if(!result){
            return res.status(404).json({message:'Book not found :('});
        }
        return res.status(200).json({message:'Book updated successfuly !!!'});
    }
    catch(error){
        console.log(error);
        res.status(500).send({message: error.message});
    }
});

//this route is to delete an existing book
router.delete('/:id',async(req,res)=>{
    try{
        
        const {id}=req.params;
        const result=await Book.findByIdAndDelete(id);

        if(!result){
            return res.status(404).json({message:'Book not found :('});
        }
        return res.status(200).json({message:'Book deleted successfuly !!!'});
    }
    catch(error){
        console.log(error);
        res.status(404).send({message: error.message});
    }
});
export default router;