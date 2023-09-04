import {CREATE_BLOG, EDIT_BLOG, DELETE_BLOG} from '../constants';

const initialState = {
    blogData: [
        {
            id: 1,
            title: "First Blog Post",
            category: "Technology",
            content: "This is the body of the blogsdakl as kdlas klas kasdl kasld askasl kaskd aslkdas klasdkl askd asdkl askdlaskdlas kals dkasldk asldk asldk asldkasldk asldk asldk asldk asldkasldk alsdk alsdk alsdkal kla klak laskdl asdlaskdlaskdlasdkasldkasl dkasldk alsdk asldkasldkasldkasl dasldkasl dkalsdkasldkasldkasldkasldaksldkasldask kalsdakdasldkalk a kslaldl ls kl sk ksl sk lsk ls klskksldkasldksa kasl askl daklaskdal al kasldasldaskldasl als kalsdkalsdk",
            likes: false,
          },
          {
            id: 2,
            title: "First Second Post",
            category: "Technology2",
            content: "This is the first blog post.",
            likes: false,
          },
          {
            id: 3,
            title: "First Third Post",
            category: "Technology3",
            content: "This is the first blog post.",
            likes: false,
          },
          {
            id: 4,
            title: "First Fourth Post",
            category: "Technology4",
            content: "This is the first blog post.",
            likes: false,
          },
    ]
}

export default function blogReducer(state=initialState,action)
{
    switch(action.type)
    {
        case CREATE_BLOG:
            //logic to create Blog Post
            //get data from action.data
            const newBlog = action.data;
            console.log("REDUCER",action);
            newBlog.id = state.blogData.length + 1; //id increment by one for each new blogs
            return {
                ...state,
                //update initial state with new added blog
                blogData:[...state.blogData,newBlog]
            }
            
        case EDIT_BLOG:
            const editedBlog = action.data;
            const newBlogs = state.blogData.map((blog)=>
                blog.id === editedBlog.id?editedBlog:blog
            );
            console.log("REDUCER EDITED",action);
            return {
                ...state,
                blogData:newBlogs
            }

        case DELETE_BLOG:
            const deleteId = action.data;
            const filteredBlogs = state.blogData.filter((blog)=>blog.id!==deleteId);
            console.log("Delete Blog Action",action);
            return {
                ...state,
                blogData:filteredBlogs
            }
        
        default:
            return state
    }   
}