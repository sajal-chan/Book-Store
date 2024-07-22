import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import EditBook from './pages/CreateBook';
import ShowBook from './pages/ShowBook';
import DeleteBook from './pages/DeleteBook'
const App = () => {
  return (
    <Routes>
      <Route path='./pages/Home' element={<Home />}/>      
      <Route path='./pages/CreateBook' element={<CreateBook/>}/>      
      <Route path='./pages/ShowBook' element={<ShowBook/>}/>      
      <Route path='./pages/DeleteBook' element={<DeleteBook/>}/>      
      <Route path='./pages/EditBook' element={<EditBook/>}/>      
    </Routes>
  )
}

export default App