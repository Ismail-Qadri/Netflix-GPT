import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignInForm, setIsSignInForm]= useState(true);

    const handleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    };

  return (
    <div >
        <Header />
        <div className='absolute'>
            <img 
            src='https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg'
            alt='background-img' />
        </div>
        <form className='absolute p-10 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85'>
            <h1 className='font-bold text-3xl py-4'>{ isSignInForm? 'Sign In' : 'Sign Up'}</h1>
            {!isSignInForm && (
             <input 
            className='p-2 my-2 w-full bg-transparent border border-white rounded-lg'
            type='text' 
            placeholder='Full Name' 
            />
        )}
            <input 
            className='p-2 my-2 w-full bg-transparent border border-white rounded-lg'
            type='text' 
            placeholder='Email or mobile number' 
            />
            
            <input 
            className='p-2 my-2 w-full bg-transparent border border-white rounded-lg' 
            type='password' 
            placeholder='Password' />

            <button className='p-3 my-4 text-white font-bold bg-red-600 rounded-lg w-full'>{ isSignInForm? 'Sign In' : 'Sign Up'}</button>
            <p className='py-4 ' onClick={handleSignInForm} >
                { isSignInForm? 'New to Netflix? SignUp Now' : 
                'Already registered? Sign In Now, '}</p>
        </form>
    </div>
  )
}

export default Login