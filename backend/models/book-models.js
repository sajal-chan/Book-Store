import mongoose from "mongoose"

const bookSchema=mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        author:{
            type:String,
            required:true,
        },
        publishYear:{
            type:Number,
            required:true
        }
    },
    {
        timestamps:true,
    }
);

export const Book = mongoose.model('Book',bookSchema);
/*the mongoose.model a funcion of the mongoose framework, it has 2 parameters, the Model name and Schema 
this Book variable acts like a blueprint for the the upcoming data that we can save in the same format, 
saves time and lines of code*/ 