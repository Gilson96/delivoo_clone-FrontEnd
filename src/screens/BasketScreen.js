
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { XCircleIcon } from '@heroicons/react/24/solid';
import moto_image from '../assets/2301898.png'

const BasketScreen = () => {
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [item, setItem] = useState([items])
  const basketTotal = useSelector(selectBasketTotal);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[items.id] = results[items.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems)
  }, [items])

  

  
  return (
    <div className="flex-1 bg-white">
      <div className="flex-1 bg-gray-100">
        <div className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <div className="top-2">
            <p className="text-lg font-bold text-center">Basket</p>
            <p className="text-center text-gray-400">{restaurant.title}</p>
          </div>

          <div
            onClick={() => {navigate(-1); }}
            className="rounded-full bg-gray-100 absolute top-7 right-5 cursor-pointer hover:bg-gray-200"
          >
            <XCircleIcon color="#00CCBB" height={50} width={50}  />
          </div>
        </div>

        <div className="flex flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <div className={`h-7 w-7  p-4 bg-slate-200 rounded-full bg-[url('${moto_image }')] bg-center	bg-no-repeat	bg-cover`}>
          </div>
          <p className="flex-1">Deliver in 25-40 min</p>
          <div>
          </div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {console.log(groupedItemsInBasket)}
          {items.map((item,index) => (
            <div key={index}className="flex flex-row items-center space-x-2 bg-white py-2 px-5">
              <div className='h-5 w-5 rounded-full bg-[#00CCBB]'>
                
              </div>
              <p className="flex-1">{item.title}</p>

              <p className="text-gray-600">
                {'£'+item.price}
              </p>
              <div>
                <p
                  className="text-[#00CCBB] text-xs cursor-pointer"
                  onClick={() => dispatch(removeFromBasket({ id: item.id }))}
                >
                  Remove
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-5 bg-white mt-5 space-y-4">
          <div className="flex flex-row justify-between">
            <p className="text-gray-400">Subtotal</p>
            <p className="text-gray-400">
              {'£'+ basketTotal.toFixed(2)}
            </p>
          </div>

          <div className="flex flex-row justify-between">
            <p className="text-gray-400">Delivery fee</p>
            <p className="text-gray-400">
              {'£'+ 3.50}
            </p>
          </div>

          <div className="flex flex-row justify-between">
            <p>Order Total</p>
            <p className="font-extrabold">
              £{Number.parseFloat(basketTotal.toFixed(2)) + 3.50}
            </p>
          </div>

          <div className="rounded-lg bg-[#00CCBB] p-4">
            <Link to='/preparingOrderScreen' className='hover:no-underline hover:text-white'>
              <p className="text-center text-white text-lg font-bold">Place Order</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasketScreen