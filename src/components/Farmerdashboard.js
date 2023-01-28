import React from 'react';
import { Link } from 'react-router-dom';
function farmerdashboard() {
  return (
      <div id='farmerdashboard' className=' flex flex-col bg-slate-400'>
        <div className='h-[10vh]'></div>
        <div className='w-[80vw] mx-auto bg-white'>
          <h2 className='font-extrabold text-3xl px-14 py-6 underline text-green-500 text-center'>
            Dashboard
          </h2>
          <hr className='border-black border-2' />
          <h4 className='font-extrabold text-xl px-14 py-2 rounded-lg underline text-center text-green-500'>Services: </h4>
          <div className='flex justify-center items-center my-4 overflow-y-hidden border border-white w-[80vw] mx-auto rounded-xl p-4'>
            <Link to='/applyforsoiltest' className='text-white font-bold text-center overflow-visible'>
              <div className='mx-6 h-44 w-44 shadow-gray-400 shadow-lg cursor-pointer hover:scale-105 transition-all bg-01 bg-cover'>
                <div className='bg-overlay h-full flex flex-col justify-end items-center overflow-y-hidden'>
                  <p>Apply for Soil Test</p>
                </div>
              </div>
            </Link>
            <div className='mx-6 h-44 w-44 shadow-gray-400 shadow-lg cursor-pointer hover:scale-105 transition-all overflow-y-hidden bg-02 bg-cover'>
              <div className='bg-overlay h-full flex flex-col justify-end items-center overflow-y-hidden'>
                <Link to='/sell' className='text-white font-bold text-center'>Sell your crop</Link>
              </div>

            </div>
            <div className='mx-6 h-44 w-44 shadow-gray-400 shadow-lg cursor-pointer hover:scale-105 transition-all overflow-y-hidden bg-03 bg-cover'>
              <div className='bg-overlay h-full flex flex-col justify-end items-center overflow-y-hidden'>
                <p className='text-white font-bold text-center'>Crop Suggestions</p>
              </div>
            </div>
          </div>
          <hr className='border-black border-2' />
          <h4 className='font-extrabold text-xl px-14 py-2 rounded-lg underline text-center text-green-500'>Investors: </h4>
          <Link to='/search-investors' className='font-bold text-black px-4 mx-10 bg-blue-300 w-72 rounded-xl hover:bg-blue-200'>Search for New Investors -{'>'}</Link>
          <div className='mx-auto p-4 border border-white my-4 flex justify-center w-[80vw]'>
            <div className='w-[30vw] shadow-xl flex shadow-gray-400 border border-gray-500 rounded-sm h-[30vh] m-3 cursor-pointer'>
              <div className='w-3/5 h-full bg-investor bg-cover bg-center'></div>
              <div className='flex justify-center flex-col items-center'>
                <p className='font-bold text-xl px-4 py-2'>Suresh</p>
                <p className='font-bold text-md px-4 py-2'>Chennai</p>
                <p className='font-bold text-md px-4 py-2'>INR 18,000</p>
                <p className='font-bold text-md px-4 py-2'>Equity: 54%</p>
              </div>
            </div>
            <div className='w-[30vw] shadow-xl flex shadow-gray-400 border border-gray-500 rounded-sm h-[30vh] m-3 cursor-pointer'>
              <div className='w-3/5 h-full bg-investor01 bg-cover bg-center'></div>
              <div className='flex justify-center flex-col items-center'>
                <p className='font-bold text-xl px-4 py-2'>Ramesh</p>
                <p className='font-bold text-md px-4 py-2'>Bangalore</p>
                <p className='font-bold text-md px-4 py-2'>INR 12,000</p>
                <p className='font-bold text-md px-4 py-2'>Equity: 40%</p>
              </div>
            </div>
            <div className='w-[30vw] shadow-xl flex shadow-gray-400 border border-gray-500 rounded-sm h-[30vh] m-3 cursor-pointer'>
              <div className='w-3/5 h-full bg-investor02 bg-center bg-cover'></div>
              <div className='flex justify-center flex-col items-center'>
                <p className='font-bold text-xl px-4 py-2'>Venkatesh</p>
                <p className='font-bold text-md px-4 py-2'>Hyderabad</p>
                <p className='font-bold text-md px-4 py-2'>INR 8,000</p>
                <p className='font-bold text-md px-4 py-2'>Equity: 23%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default farmerdashboard