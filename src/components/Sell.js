import React from 'react'

function Sell() {
    return (
        <div>
            <div className='h-[15vh]'></div>
            <div className='w-[80vw] block m-auto'>
            <h2 className='text-3xl py-6 font-extrabold'>
                AGRI LINK MARKET
            </h2>
            <label htmlFor="">Crop name: </label>
            <select className='w-56 mx-4 border border-black'>
                <option>--select--</option>
                <option>Paddy</option>
                <option>Maize</option>
                <option>Wheat</option>
                <option>Sugar Cane</option>
            </select>
            </div>
        </div>
    )
}

export default Sell