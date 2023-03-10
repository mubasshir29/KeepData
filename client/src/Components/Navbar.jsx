import React from 'react'

function Navbar() {
  return (
    <div className='nav-container w-full bg-slate-800 py-3 h-18 fixed z-10'>
        <div className='nav-bar w-full px-10 mx-auto flex justify-between items-center'>
            <h1 className='text-white text-4xl font-bold'>Keep<span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Data</span></h1>
            <div className='nav-list text-white text-lg'>
                <ul className='flex justify-between gap-6'>
                    <li className='border rounded-2xl py-1 px-4'>Login</li>
                    <li className='border rounded-2xl py-1 px-4'>Profile</li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar