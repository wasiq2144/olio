import React from 'react'
import Link from 'react'

const Navbar = () => {
    return (
        <div className='flex m-auto py-5 items-center justify-between'>
            <ul className='flex justify-between text-white gap-10'>
                <li><h3 className=' text-xl font-semibold'>JANELLE BROWN</h3>
                </li>
                <li className='text-base font-medium border-b-2'>ABOUT</li>
                <li className='text-base font-medium border-transparent border-b-2 hover:border-white'>WORK</li>
            </ul>
            <div className='flex items-center gap-3'>
                <h4 className='text-white font-medium'> LET'S CONNECT </h4>
                <button className='rounded-full bg-white text-black py-2 px-6 font-semibold'>
                info@jannelle-brown.com
                </button>
            </div>
        </div>
    )
}

export default Navbar