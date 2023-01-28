import { useState } from "react";
import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKhp7UI1tnYrJv1fGpKz-EtqvYvyHrvxM",
  authDomain: "agrilink-65884.firebaseapp.com",
  projectId: "agrilink-65884",
  storageBucket: "agrilink-65884.appspot.com",
  messagingSenderId: "547676284006",
  appId: "1:547676284006:web:8e521a7d7993e535a5f9a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState(NaN);
    const handleSubmit =  (email,password)=> {
        try{
            signInWithEmailAndPassword(auth,email,password).then(
                console.log
            ).catch(console.log)
        }catch(e){
            console.log(e)
        }
    }
    return (
        <div id='loginform' className='h-[100vh] grid place-items-center'>
            <div className='flex flex-col border border-black w-1/4 h-[60vh] p-4'>
                <form name="signupform">
                    <h2 className='font-extrabold my-2 text-center'>Sign up</h2>
                    <label htmlFor='name' className='font-bold'>Name</label>
                    <input id='name' value={name} onChange={(e) => setName(e.target.value)} type='text' className='font-sans w-full border border-black rounded-md py-2 px-4 text-lg' />
                    <label htmlFor='email' className='font-bold '>Email</label>
                    <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type='text' className='font-sans w-full border border-black rounded-md py-2 px-4 text-lg' />
                    <label htmlFor='password' className='font-bold'>Password</label>
                    <input id='password' value={password} onChange={(e) => setPassword(e.target.value)} type='password' className='font-sans w-full border border-black rounded-md py-2 px-4 text-lg ' />
                    <label htmlFor='mobile' className='font-bold'>Mobile</label>
                    <input id='mobile' value={mobile} onChange={(e) => setMobile(parseInt(e.target.value))} type='number' inputMode="tel" className='font-sans w-full border border-black rounded-md py-2 px-4 text-lg' />
                </form>
                {/* <button className="py-2 px-4 text-slate-500 font-extrabold" onClick={handleSubmit}>Sign up</button> */}
                <div className="flex my-2">
                <Link to="/farmerdashboard" className="py-2 px-1 mx-2 text-center text-white font-bold bg-green-500 cursor-pointer border border-black">Signup as farmer</Link>
                <Link to="/investordashboard" className="py-2 px-1 mx-2 text-center text-white font-bold bg-gray-500 cursor-pointer border border-black">Signup as investor</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup