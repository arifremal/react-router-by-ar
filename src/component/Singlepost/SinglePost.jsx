import React from 'react';
import './sp.css'
import { Link } from 'react-router-dom';

const SinglePost = ({p}) => {
    const {title,body,id} =p
    return (
        <div className='sp'>
            <h5>title:{title}</h5>
            <p>Des:{body}</p>
            <Link to={`/post/${id}`} >Dettails</Link>
            <button>See More </button>
        </div>
    );
};

export default SinglePost;