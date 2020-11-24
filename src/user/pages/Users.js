import React from 'react'
import UserList from '../components/UserList'

const Users = () => {
    //dummy array of users 
    const USERS = [
        {
            id: '1',
            name: 'user1',
            image: 'https://lh3.googleusercontent.com/proxy/QSQAUUB5_0LxmTyVIPGxlbS5QWrE6mGuPr0sNFB9nvWmkHmn5fSbmlFIn0Ib96fckfpYKRlpBuWogcq8h2w-2rxJru_2n7qFTAgeNrXqd-Mz8wKDcIq5oQ',
            places: 3
        },
        {
            id: '1',
            name: 'user2',
            image: 'https://lh3.googleusercontent.com/proxy/QSQAUUB5_0LxmTyVIPGxlbS5QWrE6mGuPr0sNFB9nvWmkHmn5fSbmlFIn0Ib96fckfpYKRlpBuWogcq8h2w-2rxJru_2n7qFTAgeNrXqd-Mz8wKDcIq5oQ',
            places: 2
        }
    ];
    return (
        <UserList items={USERS} />
    )
}

export default Users;
