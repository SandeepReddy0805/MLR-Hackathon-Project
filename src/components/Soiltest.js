import { useState, React } from "react";
import { Link } from "react-router-dom";
function Soiltest() {
    const [acres, setacres] = useState(0);
    return (
        <div>
            <div className='h-[20vh]'></div>
            <h2 className='text-2xl font-bold px-96'>Personal Details</h2>
            <div className='mx-96 my-6 flex flex-col'>
                <hr className="border-black mb-2"  />
                <label htmlFor='name'>Name: </label><input className='border border-black py-2 px-4' />
                <label htmlFor='phone'>Phone: </label><input type='number' className='border border-black py-2 px-4' />
                <label htmlFor='location'>Location: </label><input className='border border-black py-2 px-4' />
                <label htmlFor='dob'>Date of Birth: </label><input type='date' className='border border-black py-2 px-4' />
            </div>
            <h2 className='text-2xl font-bold px-96'>Land Details</h2>
            <div className='mx-96 my-6 flex flex-col'>
                <hr className="border-black mb-2"  />
                <label htmlFor='survey-no'>Survey No: </label><input type='number' className='border border-black py-2 px-4' />
                <label htmlFor='Village'>Village/Mandal: </label><input className='border border-black py-2 px-4' />
                <label htmlFor='District'>District: </label><input className='border border-black py-2 px-4' />
                <label htmlFor='State'>State: </label><input type='text' className='border border-black py-2 px-4' />
                <label htmlFor='Pincode'>Pincode: </label><input type='Number' className='border border-black py-2 px-4' />
                <label htmlFor='acres'>No of acres-sqyards: </label><input onChange={e => setacres(e.target.value)} type='Number' value={acres} className='border border-black py-2 px-4' />
                <div>
                    <p>Estimated Cost: INR. {acres * 1075}</p>
                    <Link to='/farmerdashboard'><button className='border border-black my-4 w-40 block m-auto' onClick={
                        (e) => {
                            alert('Application Submitted. Thank you!');
                        }
                    }>Submit</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Soiltest