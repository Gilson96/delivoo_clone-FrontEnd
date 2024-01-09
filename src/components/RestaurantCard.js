import { React } from 'react'
import { StarIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const RestaurantCard = ({
    id,
    title,
    src,
    rating,
    address,
    description,

}) => {

    const limit = (string, length, end = "...") => {
        return string.length < length ? string : string.substring(0, length) + end
    }

    return (

        <Link to="/restaurant" state={[
            id,
            title,
            src,
            rating,
            address,
            description,
            ]}
            className='hover:no-underline hover:text-black'
        >
            <div className="bg-white mr-3 shadow w-60 transition ease-in-out hover:opacity-75 duration-300 hover:scale-105 rounded-sm">
                <img src={src} className="h-36 w-64 rounded-sm" alt='card'/>
                <div className="px-3 pb-4">
                    <p className="font-bold text-lg pt-2">
                        {title}
                    </p>
                    <div className="flex flex-row items-center space-x-1">
                        <StarIcon color="green" opacity={0.5} className='w-5 h-5' />
                        <p className="text-xs text-gray-500">
                            <p className="text-green-600">{rating}{rating > 4.50 ? ' Excellent' : ' Good'}</p>
                        </p>
                    </div>

                    <div className="flex flex-row items-center space-x-1">
                        <MapPinIcon color="gray" opacity={0.4} className='w-5 h-5' />
                        <p numberOfLines={1} ellipsizeMode='tail' className="text-xs text-gray-500 flex-1 w-full">Nearby - {limit(address, 20)}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RestaurantCard

