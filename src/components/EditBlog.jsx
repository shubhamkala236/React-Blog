import React, { useState,useEffect } from 'react'
import { Link,useParams,useNavigate } from 'react-router-dom'
import { connect } from "react-redux";
import { editBlog } from "../Services/Actions/actions";


const EditBlog = (props) => {
  const {id} = useParams();
  const blogList = props.blogs;
  const navigate = useNavigate();
  // console.log(props);
  //This blog data
  // const blogData = blogList.find((blog) => blog.id === parseInt(id));
  console.log("BLOGDATA",blogList);

  
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [blogId, setBlogId] = useState(id);
  const [like, setLike] = useState(false);

    //validation Error
  const [titleError, setTitleError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [contentError, setContentError] = useState("");

  
  useEffect(()=>{
    console.log("USE_EFFECT");
    if(blogList && id)
    {
      const blogData = blogList.find((blog) => blog.id === parseInt(id));
      console.log(blogData);
      if (blogData) {
        setTitle(blogData.title);
        setCategory(blogData.category);
        setContent(blogData.content);
        setBlogId(blogData.id);
        setLike(blogData.likes)
      }
      else{
        navigate("/")
      }
    }//eslint-disable-next-line
  },[id])
  
  const handleEditSubmit= (e)=>{
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

    //Now edit the blog data
    const updatedBlog = {
      id:blogId,
      title:title,
      category:category,
      content:content,
      like:like
    };
    // Dispatch the editBlog action with the updated blog data
    props.editBlog(updatedBlog);

    //Redirect to another page
    navigate("/");
    
  }

  return (
    <div className="d-flex flex-column">
      <Link to='/'><button type="button" className="btn btn-primary mt-4 p-auto">Back</button></Link>
      <h3 className='text-center'>Edit Blog</h3>
      <form onSubmit={(e)=>handleEditSubmit(e)} className="form m-5">
        <div className="form-group m-3">
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            className="form-control"
            id="Title"
            aria-describedby="emailHelp"
            placeholder="Enter Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
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
            onChange={(e)=>setCategory(e.target.value)}
          />
          <div className="text-danger">{categoryError?categoryError:null}</div>
        </div>

        <div className="form-group m-3">
            <label htmlFor="Content">Content</label>
            <textarea className="form-control" id="Content" rows="15" placeholder="Enter blog..." value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
            <div className="text-danger">{contentError?contentError:null}</div>
        </div>

        <button type='submit' className="btn btn-primary m-3">
          Save
        </button>
      </form>
    </div>
  )
}


//taking data list from store and wrapping it to provide as props
const mapStateToProps = (state) => ({
  blogs: state.blogReducer.blogData,
});

export default connect(mapStateToProps,{editBlog})(EditBlog);