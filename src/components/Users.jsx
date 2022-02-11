import React, { useEffect, useState } from 'react';
import { getUsers } from '../utils/api';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then((res) => {
            setUsers(res);
        });
    }, []);

    return (
        <main>
            <h1>USERS!</h1>
            <ul className='UsersList'>
                {users.map((user) => {
                    return (
                        <li key={user.username} className='UserCard'>
                            <h3>{user.username}</h3>
                            <p>{user.name}</p>
                            <img 
                            className='UserAvatarImg'
                            src={user.avatar_url}
                            alt={user.username}
                            ></img>
                        </li>
                    );
                })};
            </ul>
        </main>
    );
};

export default Users;

