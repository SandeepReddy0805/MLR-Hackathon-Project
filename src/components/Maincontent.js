import React from 'react'
import { Link } from 'react-router-dom';
import SplashScreen from '../components/SplashScreen'
function Maincontent() {
  return (
    <>
    <SplashScreen/>
    <div className='bg-herobanner bg-cover z-[-2] h-screen flex justify-center overflow-y-hidden'>
        <div className='bg-overlay h-full flex flex-col justify-center items-start'>
          <div className='flex flex-col justify-center items-start mx-32'>
                <h1 className='text-6xl text-white w-7/12 mb-10 ml-10 font-bold overflow-hidden'>AgriLink - You farm,<br /> We Connect</h1>
                <h4 className='w-4/6 mb-10 ml-10 text-xl text-slate-100'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, repellat quia dignissimos quis obcaecati deleniti consequatur, aut molestiae ex eligendi, fuga sequi laudantium totam fugiat? Sit atque nisi deserunt sunt.</h4>
                <Link  to='/signup' className='w-72 bg-red-500 text-white font-bold px-6 ml-8 py-3 rounded-xl cursor-pointer'>Join Us Now</Link>
            </div>
        </div>
    </div>
    </>
  );
}

export default Maincontent