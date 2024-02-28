import React from 'react'
import Header from './Header';

const Login = () => {
return(
    <div>
        <Header/>
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="logo"/>
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>SIGN IN</h1>
            <input type="text" placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700' />
            <input type="password" placeholder='Password' className='p-2 my-4 w-full bg-gray-700' />
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>Sign in</button>
            <p className='py-4'>Are you new to Netflix? Sign up now</p>
        </form>
        
    </div>
);
}

export default Login;