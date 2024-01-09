import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { Link } from 'react-router-dom'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);

    if (items.length === 0) return null;
    
    return (
        <div className="absolute w-full z-50">
            <Link 
                to='/basketScreen'
                >
            <div  className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex flex-row items-center space-x-3 mb-2">
                <p className="text-white it font-extrabold text-lg bg-[#01A296] py-1 px-2">{items.length}</p>
                <p className="flex-1 text-white font-extrabold text-lg text-center">View Basket</p>
                <p className="text-lg text-white font-extrabold">
                    {'£'+basketTotal}
                </p>
            </div>
            </Link>
        </div>
    )
}

export default BasketIcon