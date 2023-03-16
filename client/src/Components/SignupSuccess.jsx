import React from 'react'
import { NavLink } from 'react-router-dom'

function SignupSuccess() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-700 p-6'>
        <h2 className='text-white text-3xl'>You have successfully registered, please <NavLink to='/login'><span className='text-green-300'>Login</span></NavLink></h2>
    </div>
  )
}

export default SignupSuccess