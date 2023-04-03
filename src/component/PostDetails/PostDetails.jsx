import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData()
    const navigator = useNavigate()
    const back=()=>{
        navigator(`/post`)

    }
    return (
        <div>
            <h1>{post.id}</h1>
            <h1>{post.title}</h1>
            <p><small>{post.body}</small></p>
            <button onClick={back}>Go back</button>
        </div>
    );
};

export default PostDetails;