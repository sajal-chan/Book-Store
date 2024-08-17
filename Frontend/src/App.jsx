// import React from 'react'
// import {Route,Routes} from 'react-router-dom'
// import Home from './pages/Home';
// import CreateBook from './pages/CreateBook';
// import EditBook from './pages/EditBook';
// import ShowBook from './pages/ShowBook';
// import DeleteBook from './pages/DeleteBook'
// const App = () => {
//   return (
//     <Routes>
//       <Route path='./pages/Home' element={<Home />}/>      
//       <Route path='./pages/CreateBook' element={<CreateBook/>}/>      
//       <Route path='./pages/ShowBook' element={<ShowBook/>}/>      
//       <Route path='./pages/DeleteBook' element={<DeleteBook/>}/>      
//       <Route path='./pages/EditBook' element={<EditBook/>}/>      
//     </Routes>
//   )
// }

// export default App


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import EditBook from './pages/EditBook'; // Fixed import path
import ShowBook from './pages/ShowBook';
import DeleteBook from './pages/DeleteBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/> // Removed ./pages/ from paths
      <Route path='/create' element={<CreateBook />}/> // Removed ./pages/ from paths
      <Route path='/show/:id' element={<ShowBook />}/> // Removed ./pages/ from paths
      <Route path='/delete/:id' element={<DeleteBook />}/> // Removed ./pages/ from paths
      <Route path='/edit/:id' element={<EditBook />}/> // Removed ./pages/ from paths
    </Routes>
  )
}

export default App
