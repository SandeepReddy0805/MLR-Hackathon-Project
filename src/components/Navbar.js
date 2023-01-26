import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center bg-transparent absolute top-0 left-0 w-screen'>
        <ul className='flex items-center'>
          <li>
        <img className='w-28' src="AgriLinkLogo.png" alt="logo" />
          </li>
            <li className='mx-8 text-white font-bold'>Home</li>
            <li className='mx-8 text-white font-bold'>Why AgriLink</li>
            <li className='mx-8 text-white font-bold'>About us</li>
        </ul>
        <div className='mx-4'>
            <a className='bg-green-500 mx-4 py-2 px-4 rounded-xl text-lg text-white font-bold' href='/'>Login</a>
            <a className='bg-green-500 mx-4 py-2 px-4 rounded-xl text-lg text-white font-bold' href='/'>Sign up</a>
        </div>
    </div>
  )
}

export default Navbar