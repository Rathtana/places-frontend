import React from 'react'

import UserItem from './UserItem'
import './UserList.css'

const UserList = ({items}) => {
    if(items.length === 0) {
        return(
            <h1 className="center">No Users was found </h1>
        )
    }
    return (
        <ul className="users-list">
            {items.map(user => {
                return <UserItem key={user.id} id={user.id} name={user.name} image={user.image} placeCount={user.places}/>

            })}

        </ul>
    )
}

export default UserList
