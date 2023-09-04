
import {CREATE_BLOG,EDIT_BLOG,DELETE_BLOG} from '../constants';

export const createBlog = (newBlog) =>{
    console.log("ACTION DATA",newBlog);
    return {
        type:CREATE_BLOG,
        data:newBlog
    }
}
export const editBlog = (updatedBlog) =>{
    console.log("ACTION Edited DATA",updatedBlog);
    return {
        type:EDIT_BLOG,
        data:updatedBlog
    }
}
export const deleteBlog = (blogId) =>{
    return {
        type:DELETE_BLOG,
        data:blogId
    }
}