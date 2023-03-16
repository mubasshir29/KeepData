import React from 'react'
import logo from './../images/Keep_Data_logo_2.png'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav-container w-full bg-slate-800 py-3 h-18 fixed z-10'>
        <div className='nav-bar w-full px-10 mx-auto flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
          <h1 className='text-white text-4xl font-bold'>Keep<span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Data</span></h1>
          </div>
            <div className='nav-list text-white text-lg'>
                <ul className='flex justify-between gap-6'>
                    <li className='bg-indigo-500 rounded-2xl py-1 px-4'><NavLink className='focus:outline-none' to='/login'>Login</NavLink></li>
                    <li className='bg-indigo-500 rounded-2xl py-1 px-4'><NavLink to='/profile' className='focus:outline-none'>Profile</NavLink></li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar