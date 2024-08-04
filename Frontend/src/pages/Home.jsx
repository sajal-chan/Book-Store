import React, { useEffect, useState } from 'react'
import axios from 'axios'; // Fixed import
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs'; // Fixed import
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'; // Fixed import

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false); // Fixed variable name

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Book List</h1>
        <Link to='/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl'/>
        </Link>
      </div>
      {loading ? (
        <Spinner/>
      ) : (
        <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md'>No</th>
              <th className='border border-slate-600 rounded-md'>Title</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
              <th className='border border-slate-600 rounded-md'>Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => ( 
              <tr key={book._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>
                  {index + 1}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {book.title} 
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  {book.author} 
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  {book.publishYear} 
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  <div className='flex justify-center gap-x-4'> 
                    <Link to={`/show/${book._id}`}> 
                      <BsInfoCircle className='text-2xl text-green-500'/>
                    </Link>
                    <Link to={`/edit/${book._id}`}> 
                      <AiOutlineEdit className='text-2xl text-yellow-300'/>
                    </Link>
                    <Link to={`/delete/${book._id}`}> 
                      <MdOutlineDelete className='text-2xl text-red-600'/> 
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Home
