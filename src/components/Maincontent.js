import React from 'react'

function Maincontent() {
  return (
    <>
    <div className='bg-herobanner bg-cover z-[-2] h-screen'>
        <div className='bg-overlay h-full flex flex-col justify-center items-start'>
            <div className="">
                <h1 className='text-6xl text-white w-11/12 mb-10 mx-10 font-bold'>AgriLink - You farm,<br /> We Connect</h1>
            </div>
            <h4 className='w-4/6 mb-10 mx-10 text-xl text-slate-100'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, repellat quia dignissimos quis obcaecati deleniti consequatur, aut molestiae ex eligendi, fuga sequi laudantium totam fugiat? Sit atque nisi deserunt sunt.</h4>
        </div>
    </div>
    <div className="h-screen"></div>
    </>
  );
}

export default Maincontent