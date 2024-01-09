import React, { useEffect, useState } from 'react'
import axios from '../axios'
import DishRow from './DishRow';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';

const Dishes = ({ id }) => {
    const [dishes, setDishes] = useState([]);
    const restaurant = useSelector(selectRestaurant)
    console.log(restaurant.id)

    useEffect(() => {
        axios.get(`https://delivroo-clone-v2-d179eabd4124.herokuapp.com/api/restaurants/${id}/dishes`).then(({ data }) => {
            setDishes(data.data);
        })
    }, []);

    console.log(dishes)
    return (
        <div>{dishes.map((dish => (
            <DishRow
                id={dish.id}
                title={dish.title}
                price={dish.price}
                src={dish.src}
                description={dish.description}
            />
        )))}</div>
    )
}

export default Dishes