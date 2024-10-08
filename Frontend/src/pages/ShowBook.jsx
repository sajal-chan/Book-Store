import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

function ShowBook() {
  const [books,setBooks]=useState({});
  const [loading,setLoading]=useState(false);
  const { id }=useParams();
  console.log({id});
  useEffect(()=>{
    if(id){//running the below code only if the id is defined
      setLoading(true);
      console.log(`Fetching book with id ${id}`);
      axios.get(`http://localhost:5555/books/:${id}`/*,data*/)
      .then((response)=>{
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error)=>
      {
        console.log(error);
        setLoading(false);
      })
    }
  },[id]);

  return (
    <div className='p-4 '>
      <BackButton className=''/>
      <h1 className='text-3xl my-4'> ShowBook</h1>
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
        <div className='my-4'>
          <span className='text-xl mr-4 text-greay-500'>Id</span>
          <span>{books._id}</span>
        </div>

        <div className='my-4'>
          <span className='text-xl mr-4 text-greay-500'>Title</span>
          <span>{books.title}</span>
        </div>

        <div className='my-4'>
          <span className='text-xl mr-4 text-greay-500'>Author</span>
          <span>{books.author}</span>
        </div>

        <div className='my-4'>
          <span className='text-xl mr-4 text-greay-500'>Publish Year</span>
          <span>{books.publishYear}</span>
        </div>

        <div className='my-4'>
          <span className='text-xl mr-4 text-greay-500'>Create Time</span>
          <span>{new Date(books.createdAt).toString()}</span>
        </div>

        <div className='my-4'>
          <span className='text-xl mr-4 text-greay-500'>Last Updated At</span>
          <span>{new Date(books.updatedAt).toString()}</span>
        </div>
      </div>
    </div>
  )
}

export default ShowBook