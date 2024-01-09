import React from 'react'
import RestaurantCard from './RestaurantCard'
import Category from './CategoryCard';
import asian from '../assets/Asian/Asian.jpg'
import healthy from '../assets/Healthy/healthy.jpg'
import pizza from '../assets/Pizza/pizza.jpg'
import italian from '../assets/Italian/italian.jpg'
import vegan from '../assets/Vegan/vegan.jpg'
import dessert from '../assets/Desserts/dessert.jpg'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';

const Categories = ({categories_id}) => {
 
  return (
    <>
      <div className="flex flex-1 ">
    
        <Category image={asian} text={'Asian'} categories_id={categories_id} id={1}/>
        <Category image={healthy} text={'Healthy'} categories_id={categories_id} id={4}/>
        <Category image={pizza} text={'Pizza'} categories_id={categories_id} id={5}/>
        <Category image={vegan} text={'Vegan'} categories_id={categories_id} id={6}/>
      </div>
    </>
  )
}

export default Categories