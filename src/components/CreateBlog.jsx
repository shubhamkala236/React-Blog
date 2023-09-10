import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { connect } from "react-redux";
import { createBlog } from "../Services/Actions/actions";

const CreateBlog = (props) => {
  console.log("PROPS",props);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  //validation Error
  const [titleError, setTitleError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [contentError, setContentError] = useState("");


  //Handle Submit
  const handleSubmit = (e) =>{
    e.preventDefault();
    let isValid = true;

    // Reset previous validation errors
    setTitleError("");
    setCategoryError("");
    setContentError("");
   
    //Title Error
    if(title.length<=3)
    {
      setTitleError("Title length should be greater than 3 && is required");
      isValid = false;
    }

    //category error
    if (category.length<=3) {
      setCategoryError("Title length should be greater than 3 && is required");
      isValid = false;
    }

    //content error
    if (content.length<=3) {
      setContentError("Content length should be greater than 3 && is required");
      isValid = false;
    }
    
    if(!isValid)
    {
      return;
    }

    //create a new blog object to pass it into action method
    const newBlog = {
      title:title,
      category:category,
      content:content,
      likes: false,
      id: 5,
    };

    //dispatch the data to action method to createBlog
    props.createBlog(newBlog);
    
    // Clear the form fields
    setTitle("");
    setCategory("");
    setContent("");
    
    //redirect to home
    navigate("/");
  }


  return (
    <div className="d-flex flex-column">
      <Link to='/'><button type="button" className="btn btn-primary mt-4 p-auto">Back</button></Link>
      <h3 className='text-center'>Create Blogs</h3>
      <form className="form create-form m-5" onSubmit={handleSubmit}>
        <div className="form-group m-3">
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            className="form-control"
            id="Title"
            aria-describedby="emailHelp"
            placeholder="Enter Title"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            required
          />
          <div className="text-danger">{titleError?titleError:null}</div>
        </div>

        <div className="form-group m-3">
          <label htmlFor="Category">Category</label>
          <input
            type="text"
            className="form-control"
            id="Category"
            placeholder="Enter Category"
            value={category}
            onChange={(e)=>{setCategory(e.target.value)}}
            required
          />
          <div className="text-danger">{categoryError?categoryError:null}</div>
        </div>

        <div className="form-group m-3">
            <label htmlFor="Content">Content</label>
            <textarea className="form-control" id="Content" rows="15" value={content} onChange={(e)=>{setContent(e.target.value)}} required placeholder="Enter blog..."></textarea>
          <div className="text-danger">{contentError?contentError:null}</div>
        </div>
        <button type="submit" className="btn btn-primary m-3">
          Submit
        </button>
      </form>

    </div>
  );
};

//here we are sending props to OUR this Component CreateBlog
export default connect(null, { createBlog })(CreateBlog);
