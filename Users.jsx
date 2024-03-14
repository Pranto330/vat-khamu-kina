import React, { useEffect, useState } from 'react';
import Por from './Por';


const Users = () => {
    const [Users ,setUsers] =useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h3>Users: {Users.length}</h3>
            {
                Users.map(user => <Por
                user ={user}
               
                >
                </Por> )
            }
        </div>
    );
};

export default Users;