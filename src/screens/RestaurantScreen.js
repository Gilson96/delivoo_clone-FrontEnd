import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeftIcon, StarIcon, MapPinIcon, QuestionMarkCircleIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Dishes from '../components/Dishes';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = (props) => {
  const { state } = useLocation();
  const dispatch = useDispatch();

  const id = state[0];
  const title = state[1];
  const src = state[2];
  const rating = state[3];
  const address = state[4];
  const description = state[5];

  useEffect(() =>{
    dispatch(setRestaurant({
      id,
      title,
      src,
      rating,
      address,
      description
    }))
  })

  return (

    <div>
     
      <div className="relative">
      <div className={`bg-[url(${src})] h-96 w-full bg-center	bg-no-repeat	bg-cover`}></div>
        <Link to='/'
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          <ArrowLeftIcon className='h-5 w-5' color="#00CCBB" />
        </Link>
      </div>

      <div className="bg-white">
        <div className="px-4 pt-4">
          <p className="text-3xl font-bold">{title}</p>


          <div className="flex flex-row space-x-2 my-1">
            <div className="flex flex-row items-center space-x-1">
              <StarIcon className='h-5 w-5' color="green" opacity={0.5} />
              <p className="text-xs text-gray-500">
                <p className="text-green-600">{rating} {rating > 4.5 ? 'Excellent' : 'Good'}</p>
              </p>
            </div>

            <div className="flex flex-row items-center space-x-1">
              <MapPinIcon className='h-5 w-5' color="gray" opacity={0.4} />
              <p className="text-xs text-gray-500">
                <p className="text-gray-500">Nearby · {address}</p>
              </p>
            </div>
          </div>

          <p className="text-gray-500 mt-2 pb-4">{description}</p>
        </div>
        <div className="flex flex-row items-center space-x-2 p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon className='h-5 w-5' color="gray" opacity={0.4} />
          <p className="pl-2 flex-1 text-ms font-bold">
            Have a food allergy?
          </p>
          <ChevronDownIcon className='h-5 w-5' color="#00CCBB" />
        </div>
      </div>

      <div className="pb-10">
        <p className="px-4 pt-6 mb-3 font-bold text-xl">Menu</p>
        <Dishes id={id} />
      </div>
      
      <BasketIcon />
    </div>


  )
}

export default RestaurantScreen