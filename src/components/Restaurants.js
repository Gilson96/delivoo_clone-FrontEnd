import React, { useEffect, useState } from 'react'
import axios from 'axios';
import RestaurantCard from './RestaurantCard';
import { UseSelector, useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';


const Restaurants = ({images}) => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios.get("https://delivroo-clone-v2-d179eabd4124.herokuapp.com/api/restaurants").then(({data}) => {
            setRestaurants(data);
        })
    }, []);

    return (
        
        <div className='flex flex-row my-2 ml-3 gap-3 px-2 flex flex-row overflow-x-auto'>
         
            {restaurants.map((res,index) => (
                <RestaurantCard
                    id={res.id}
                    title={res.title}
                    rating={res.rating}
                    address={res.address}
                    src={images[index]}
                    description={res.description}
                />
            ))}
        </div>
    )
}

export default Restaurants