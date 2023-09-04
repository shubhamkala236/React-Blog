import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home.jsx';
import CreateBlog from './components/CreateBlog.jsx'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Blog from './components/Blog.jsx';
import BlogDetails from './components/BlogDetails.jsx';
import EditBlog from './components/EditBlog.jsx';

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route path='/' element={<Blog/>} />
        <Route path='/create-blog' element={<CreateBlog/>} />
        <Route path='/blogDetail/:id' element={<BlogDetails/>} />
        <Route path='/editDetail/:id' element={<EditBlog/>} />
        <Route path='/*' element={<Navigate to='/'/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App