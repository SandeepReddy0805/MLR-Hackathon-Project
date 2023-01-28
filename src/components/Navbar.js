import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center absolute w-[98.8vw] bg-gray-700'>
        <ul className='flex items-center'>
          <li>
        <img className='w-20' src="AgriLinkLogo.png" alt="logo" />
          </li>
            <li className='mx-8 text-white font-bold cursor-pointer hover:text-gray-400'><a href='/'>Home</a></li>
            <li className='mx-8 text-white font-bold cursor-pointer hover:text-gray-400'><a href='/why'>Why AgriLink</a></li>
            <li className='mx-8 text-white font-bold cursor-pointer hover:text-gray-400'><a href='/contact'>Contact Us</a></li>
        </ul>
    </div>
  )
}

export default Navbar