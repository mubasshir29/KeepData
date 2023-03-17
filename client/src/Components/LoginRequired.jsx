import React from 'react'
import { NavLink } from 'react-router-dom'

function LoginRequired() {
  return (
    <div className='ml-64  w-full h-screen flex justify-center items-center bg-slate-700'>
        <h2 className='text-white text-3xl'>You have not logged in, please <NavLink to='/login'><span className='text-indigo-500'>Login</span></NavLink></h2>
    </div>
  )
}

export default LoginRequired