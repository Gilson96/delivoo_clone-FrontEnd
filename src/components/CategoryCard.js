import React from 'react'
const CategoryCard = ({ image, text, id, categories_id }) => {

  return (
    <div
      className='w-1/2 pt-3.5 pt-2.5 cursor-pointer transition ease-in-out hover:opacity-75 duration-300'
      onClick={() => categories_id(id)}
    >
      <div className='relative mr-2 shadow rounded-2xl'>
        <div className={`bg-[url('${image}')] h-36 w-full bg-center	bg-no-repeat	bg-cover rounded-2xl`}></div>
        <p className='absolute bottom-1 left-1 text-white font-bold '>{text}</p>
      </div>
    </div>
  )
}

export default CategoryCard

