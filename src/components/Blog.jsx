import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { useLikeContext } from "../context/LikeContext";
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';


const mapStateToProps = (state) => ({
  blogs: state.blogReducer.blogData,
});

//props coming from store using mapStateToProps function
const Blog = (props) => {
  const blogList = props.blogs;
  const { likes } = useLikeContext();
  console.log(blogList);
  
  return (
    <div className="m-2 d-flex flex-column">
      <div className="button-container d-flex justify-content-end w-100 p-2">
        <Link to='/create-blog'><button type="button" className="btn btn-primary">Create Blog</button></Link>
      </div>

      {
        blogList.map((item)=>(
          <Card key={item.id} className="m-3 my-card" style={{ maxHeight: "15rem"}}>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.category}
                </Card.Subtitle>
                <Card.Subtitle className="like mb-2 text-muted">
                {likes[item.id] ? <FcLike style={{ fontSize: '1.3rem' }}/> : <FcLikePlaceholder style={{ fontSize: '1.3rem' }}/>}
                </Card.Subtitle>
                <Card.Text style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>
                  {item.content}
                </Card.Text>
              <Link to={'blogDetail/'+item.id}><button type="button" className="btn btn-primary m-auto p-auto">View Details</button></Link>
            </Card.Body>
          </Card>
        ))
      }
      
    </div>
  );
};

export default connect(mapStateToProps)(Blog);
