import React from 'react'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom'

const DeliveryScreen = () => {
    const navigate = useNavigate();
    const restaurant = useSelector(selectRestaurant);

    const position = [restaurant.lat, restaurant.long]

    return (
        <div className="bg-[#00CCBB]">
            <div className="z-58">
                <div className="flex flex-row justify-between items-center p-5">
                    <div onClick={() => navigate("/")}>
                        <XMarkIcon color="white" className='h-5 w-5 cursor-pointer' />
                    </div>
                    <p className="font-light text-white text-lg">Order Help</p>
                </div>

                <div className="bg-white mx-5 my-5 rounded-md p-6 z-50 shadow-md relative">
                    <div className="p-2">
                        <p className="text-lg text-gray-400">
                            Estimated Arrival
                        </p>
                        <p className="text-3xl font-bold fle">20-35 Minutes</p>

                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <img
                          alt='#'
                          src={require('../assets/2301898.png')}
                          className='h-20 w-20'
                        />
                    </div>
                    <p className="mt-3 text-gray-500">
                        Your order at {restaurant.title} is being prepared
                    </p>
                </div>
            </div>

            <div className="bg-white flex flex-row items-center space-x-5 h-28 bottom-0">
                <img
                    alt='#'
                    src={require('../assets/2301898.png')}
                    className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5'
                />
                <div className="flex-1">
                    <p>
                        Tommy Monny
                    </p>
                    <p className="text-gray-400">Your Rider</p>
                </div>

                <p className="text-orange text-lg mr-5 font-bold">Call</p>
            </div>

        </div>
    )
}

export default DeliveryScreen