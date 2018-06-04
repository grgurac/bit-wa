import React from "react";


const PostItem = (props) => {
    const { id, title, body } = props.post;
    return (
        <div class="row">
            <div class="col s12">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">{title}</span>
                        <p>{body}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}








export default PostItem;