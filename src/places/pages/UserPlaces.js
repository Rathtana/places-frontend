import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const UserPlaces = () => {

    const DUMMY_PLACES = [{
        id: 'u1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://untappedcities.com/wp-content/uploads/2015/07/Flatiron-Building-Secrets-Roof-Basement-Elevator-Sonny-Atis-GFP-NYC_5.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484746,
            long: -73.9897601
        },
        creator: 'u1'
    },
    {
        id: 'u2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://untappedcities.com/wp-content/uploads/2015/07/Flatiron-Building-Secrets-Roof-Basement-Elevator-Sonny-Atis-GFP-NYC_5.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484746,
            long: -73.9897601
        },
        creator: 'u2'
    }
    ]

    const userId = useParams().userId;
    const loadPlaces = DUMMY_PLACES.filter(place => place.id === userId);

    return (
        <PlaceList items={loadPlaces} />
    )
}

export default UserPlaces
