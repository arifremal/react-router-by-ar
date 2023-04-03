import React from 'react';
import './sp.css'
import { Link, useNavigate } from 'react-router-dom';

const SinglePost = ({p}) => {
    const {title,body,id} =p
    const navigate = useNavigate()
    const hand =()=>{
        navigate(`/post/${id}`)

    }
    return (
        <div className='sp'>
            <h5>title:{title}</h5>
            <p>Des:{body}</p>
            <Link to={`/post/${id}`} >Dettails</Link>
            <Link to={`/post/${id}`} > <button>See More </button></Link>
            <button onClick={hand}>Handler</button>
           
        </div>
    );
};

export default SinglePost;