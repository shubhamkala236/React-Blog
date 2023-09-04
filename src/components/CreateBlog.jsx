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

  //Handle Submit
  const handleSubmit = (e) =>{
    e.preventDefault();

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
      <Link to='/'><button type="button" className="btn btn-primary m-auto p-auto">Back</button></Link>
      <form className="form m-5" onSubmit={handleSubmit}>
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
        </div>

        <div className="form-group m-3">
            <label htmlFor="Content">Content</label>
            <textarea className="form-control" id="Content" rows="15" value={content} onChange={(e)=>{setContent(e.target.value)}} required placeholder="Enter blog..."></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

    </div>
  );
};

//here we are sending props to OUR this Component CreateBlog
export default connect(null, { createBlog })(CreateBlog);
