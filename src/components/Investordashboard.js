import React from 'react'
import { Link } from 'react-router-dom'
function Investordashboard() {
  return (
    <div id='investordashboard' className='flex flex-col items-center'>
        <div className='h-32'></div>
        <h2 className='font-extrabold text-3xl px-14 py-4 underline overflow-visible'>
            Dashboard
        </h2>
        <p className='font-extrabold text-lg overflow-visible'>Search for Farms</p>
        <div className='flex flex-wrap'>
        <Link to='/offer-details'>
            <div className='w-[30vw] shadow-xl shadow-gray-400 border border-gray-500 rounded-sm h-[50vh] m-3 cursor-pointer'>
                <img src='farmphoto.jpg' alt=' '/>
                <p className='font-bold text-xl px-4 py-2'>Sandeep</p>
                <p className='font-bold text-md px-4 py-2'>Hyderabad</p>
            </div>
            </Link>
            <Link to='/offer-details'>
            <div className='w-[30vw] shadow-xl shadow-gray-400 border border-gray-500 rounded-sm h-[50vh] m-3 cursor-pointer'><div className='bg-farmphoto1 bg-center bg-cover h-4/6'/>
            <p className='font-bold text-xl px-4 py-2'>Ramesh</p>
            <p className='font-bold text-md px-4 py-2'>Adilabad</p></div>
            </Link>
            <div className='w-[30vw] shadow-xl shadow-gray-400 border border-gray-500 rounded-sm h-[50vh] m-3 cursor-pointer'><div className='bg-farmphoto2 bg-cover bg-center h-4/6'/>
            <p className='font-bold text-xl px-4 py-2'><Link to='/offer-details'>Suresh</Link></p>
            <p className='font-bold text-md px-4 py-2'>karimnagar</p></div>
            <div className='w-[30vw] shadow-xl shadow-gray-400 border border-gray-500 rounded-sm h-[50vh] m-3 cursor-pointer'><div className='bg-farmphoto3 bg-cover bg-center h-4/6'/>
            <p className='font-bold text-xl px-4 py-2'><Link to='/offer-details'>Venkatesh</Link></p>
            <p className='font-bold text-md px-4 py-2'>Warangal</p></div>
            <div className='w-[30vw] shadow-xl shadow-gray-400 border border-gray-500 rounded-sm h-[50vh] m-3 cursor-pointer'><div className='bg-farmphoto4 bg-cover bg-center h-4/6'/>
            <p className='font-bold text-xl px-4 py-2'><Link to='/offer-details'>Mani Kanta</Link></p>
            <p className='font-bold text-md px-4 py-2'>Khammam</p></div>
            <div className='w-[30vw] shadow-xl shadow-gray-400 border border-gray-500 rounded-sm h-[50vh] m-3 cursor-pointer'><div className='bg-farmphoto5 bg-cover bg-center h-4/6'/>
            <p className='font-bold text-xl px-4 py-2'><Link to='/offer-details'>Neeraj</Link></p>
            <p className='font-bold text-md px-4 py-2'>mahbubnagar</p></div>
        </div>
    </div>
  )
}

export default Investordashboard