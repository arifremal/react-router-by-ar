import React from 'react';
import './friend.css'
import { Link } from 'react-router-dom';

const Frined = ({friend}) => {
    const{name,email,phone,id}=friend
    return (
        <div className='friend'>
            <h1>{name}</h1>
            <p>email{email}</p>
            <p>Phone:{phone}</p>
            <p><Link to={`/friend/${id}`}> Show me</Link></p>
        </div>
    );
};

export default Frined;