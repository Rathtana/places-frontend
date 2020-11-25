import React from 'react'

import UserList from '../components/UserList'

const Users = () => {
    //dummy array of users 
    const USERS = [
        {
            id: 'u1',
            name: 'user1',
            image: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
            places: 3
        },
        {
            id: 'u2',
            name: 'user2',
            image: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
            places: 2
        }
    ];
    return (
        <UserList items={USERS} />
    )
}

export default Users;
