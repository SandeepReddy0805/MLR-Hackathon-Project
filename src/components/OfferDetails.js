import React from 'react'
import { Link } from 'react-router-dom'
function OfferDetails() {
    return (
        <div>
            <div className='h-[10vh]'></div>
            <div className='h-16 flex items-center text-2xl shadow-2xl border border-b-6 border-black'><Link className='px-4 hover:scale-105' to='/investordashboard'>&larr;</Link><h3 className='px-4 font-extrabold'>Farm Details</h3></div>
            <hr/>
            <div className='flex items-center h-[82vh]'>
                <div className='bg-farmphoto h-full w-3/5 bg-cover'></div>
                <div className="flex flex-col items-start justify-start px-6">
                    <p className="font-extrabold text-3xl text-center">Requirment: INR. 12,000</p>
                    <p className="text-xl py-4 font-bold">Land Details:</p>
                    <p className="text-lg pb-2">Area: 5 acres</p>
                    <p className="text-lg pb-2">Soil pH: 6.5</p>
                    <p className="text-lg pb-2">Climate: moderate</p>
                    <p className="text-lg pb-2">rainfall: 2.5 cm</p>
                    <p className="text-xl py-4 font-bold">Crop Details:</p>
                    <p className="text-lg pb-2">Crop: paddy</p>
                    <p className="text-lg pb-2">Time Period: 6 months</p>
                    <p className="font-extrabold text-xl text-center">Equity Offered: 44%</p>
                    <button className='px-4 py-2 rounded-md border mt-2 border-black hover:bg-green-400'>Offer Bid</button>
                    <div className="h-10"></div>
                    <button>Contact: 089856456</button>

                </div>
            </div>
        </div>
    )
}

export default OfferDetails