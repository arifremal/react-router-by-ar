import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../Singlepost/SinglePost';

const Post = () => {
    const post= useLoaderData()
    return (
        <div >
            <h2>All post are here</h2>
           {
            post.map(p=><SinglePost
            key={p.id}
            p={p}
            ></SinglePost>)
           }
        </div>
    );
};

export default Post;