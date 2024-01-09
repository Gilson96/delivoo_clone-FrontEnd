import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../features/basketSlice'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid'

const DishRow = ({ id, title ,description, price, src }) => {
    const [isPressed, setIsPressed] = useState(false);
    const dispatch = useDispatch();
    const items = useSelector((state) => selectBasketItemsWithId(state, id));

    const addItemsToBasket = () => {
        dispatch(addToBasket({ id, title, description, price, src }))
    }

    const removeItemsFromBasket = () => {
        if (!items.length > 0) return;

        dispatch(removeFromBasket({ id }));
    }

    return (
        <>
            <div
                onClick={() => setIsPressed(!isPressed)}
                className={`bg-white border p-4 border-grey-200 ${isPressed && "border-b-0"}`}
            >
                <div className="flex flex-row">
                    <div className="flex-1 pr-2">
                        <p className="text-lg mb-1">{title}</p>
                        <p className="text-gray-400">{description}</p>
                        <p className="text-gray-400 mt-2">
                            <p>{'£'+price}</p>
                        </p>
                    </div>

                    <div>
                        <img style={{ borderWidth: 1, borderColor: "#f3f3f4" }} src={src} className="h-20 w-20 bg-gray-300 p-4" alt='#' />
                    </div>
                </div>

            </div>
            {isPressed && (
                <div className='bg-white px-4'>
                    <div className='flex flex-row items-center space-x-2 pb-3'>
                        <div onClick={removeItemsFromBasket}>
                            <MinusCircleIcon className='h-5 w-5'
                            />
                        </div>

                        <p>{items.length}</p>

                        <div onClick={addItemsToBasket}>
                            <PlusCircleIcon
                                color='indigo'
                                className='h-5 w-5'
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DishRow