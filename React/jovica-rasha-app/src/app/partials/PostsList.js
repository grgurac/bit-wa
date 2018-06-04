import React from "react";
import PostItem from "./postItem";

const PostsList= props => {
    
    
    return (<div className="container">
        {props.myPosts.map((post) => {
            return (<PostItem key={post.id} post={post}/>)
        })}
    </div>)
}


export default PostsList;