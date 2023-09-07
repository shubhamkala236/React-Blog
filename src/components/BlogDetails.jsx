import React from "react";
import { Card } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import {connect} from 'react-redux';
import {deleteBlog} from '../Services/Actions/actions'
import { useLikeContext } from "../context/LikeContext";
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';



//getting blogs list from reducer/store
const mapStateToProps = (state) => ({
  blogs: state.blogReducer.blogData,
});
//

const BlogDetails = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogsList = props.blogs;
  console.log("From Store",blogsList);
  console.log("PROPS",props);
  const { likes, toggleLike } = useLikeContext();

  
  const blogData = blogsList.find((blog) => blog.id === parseInt(id));
 
  if (!blogData) {
    return <div>Blog not found</div>;
  }

  //Handle Delete
  const handleDelete=(e)=>{
    console.log("Delete ID",blogData.id);
    props.deleteBlog(blogData.id);
    navigate("/");

  }

  return (
    <div className="mt-5">
      <Link to="/">
        <button
          type="button"
          className="btn btn-secondary m-auto p-auto shadow"
        >
          Back
        </button>
      </Link>
      <div className="blog-detail d-flex flex-column">
        <div className="details-nav d-flex justify-content-end">
          <button onClick={()=>toggleLike(blogData.id)} className="btn m-1 btn-light shadow border-0" type="button">
            {likes[blogData.id] ? <FcLike style={{ fontSize: '1.5rem' }}/> : <FcLikePlaceholder style={{ fontSize: '1.5rem' }}/>}
          </button>
          <button onClick={()=>navigate(`/editDetail/${id}`)} className="btn btn-warning m-1 shadow" type="button">
            Edit
          </button>
          <button onClick={handleDelete} className="btn btn-danger m-1 shadow" type="button">
            Delete
          </button>
        </div>
        <div className="blog-details">
          <div className="m-3" style={{ maxHeight: "15rem" }}>
            <Card.Body>
              <Card.Title>
                <h2>{blogData.title}</h2>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <h4>{blogData.category}</h4>
              </Card.Subtitle>
              <Card.Text style={{ whiteSpace: "wrap", overflow: "auto" }}>
                {blogData.content}
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </div>
    </div>
  );
};

//getting data from store 
export default connect(mapStateToProps,{deleteBlog})(BlogDetails);
// export default BlogDetails;
