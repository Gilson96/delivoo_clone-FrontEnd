import React from 'react'
import logo from '../assets/logo-plus.svg'
import { Link } from 'react-router-dom'
import { MagnifyingGlassIcon, UserIcon, HeartIcon } from '@heroicons/react/24/outline'

const Navigation = () => {
  return (
    <div className='flex flex-row justify-between border-bottom items-center'>
      <div className='mx-2 my-4'>
        <Link to='/'><img src={logo} alt='' className='h-10 w-full' /></Link>
      </div>
      <div className='ml-2 mr-1 my-4 w-[43rem] text-center'>
        <span className='relative inline-flex align-text-bottom box-content'>
          <MagnifyingGlassIcon className='w-5	h-5 absolute bottom-0 ml-3' color='#abadad' />
        </span>
        <input placeholder='Restaurants & cuisines' className='border border-stale-200 w-full py-2 rounded pl-5 shadow-md' />
      </div>
      <div className='ml-2 my-4 mr-10 flex gap-3'>
        <button className='flex justify-center border border-stale-200 h-10 w-20 p-2 rounded shadow-md'>
          <span className=''><UserIcon className='h-5 w-5' color='indigo'/></span>
        </button>
        <button className='flex justify-center border border-stale-200 h-10 w-20 p-2 rounded shadow-md'><HeartIcon className='h-5 w-5' color='indigo'/></button>
      </div>
    </div>
  )
}

export default Navigation
