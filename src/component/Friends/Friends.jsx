import React from 'react';
import { useActionData, useLoaderData } from 'react-router-dom';
import Frined from '../Friend/Frined';

const Friends = () => {
    const friends =useLoaderData()
    // console.log(friends);
    return (
        <div>
       <h1>friends{friends.length} </h1>
       <div>
        {
            friends.map( friend => <Frined key={friend.id} friend ={friend} >

            </Frined>)
        }
       </div>
        </div>
    );
};

export default Friends;