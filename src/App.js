import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.jsx";
import CreateBlog from "./components/CreateBlog.jsx";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import Blog from "./components/Blog.jsx";
import BlogDetails from "./components/BlogDetails.jsx";
import EditBlog from "./components/EditBlog.jsx";
import '../src/App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="text-center heading">
          <Link className="btn button" to="/">
            <h1 className="text-center m-1 p-3">Blog App</h1>
          </Link>
        </div>
        <div className="container">
          <Home />
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/create-blog" element={<CreateBlog />} />
            <Route path="/blogDetail/:id" element={<BlogDetails />} />
            <Route path="/editDetail/:id" element={<EditBlog />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
