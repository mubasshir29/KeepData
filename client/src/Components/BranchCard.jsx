import React from 'react'
import logo from './../images/Instagram-Logo.png'

function BranchCard({branch}) {
    console.log(branch)
  return (
    <div className='bg-slate-700 w-[480px] p-6 m-4 rounded-xl flex'>
        <div className='flex w-ful'>
        <div className='flex flex-col w-3/4'>
            <div className=''>
                <h2 className='text-lg font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent'>{branch.name}</h2>
            </div>
            <table  className='text-left w-full mt-4 text-slate-400'>
                <tr>
                    <th className='pr-1 w-1/3'>Branch Code</th>
                    <td>{branch.branch_code}</td>
                </tr>
                <tr>
                    <th>Contact</th>
                    <td>{branch.contact}</td>
                </tr>
                <tr>
                    <th>Address</th>
                    <td>{branch.location}</td>
                </tr>
            </table>
        </div>
        <img className='w-1/4 h-auto items-center grow-0 self-center' src={logo} />
        </div>
        
        
    </div>
  )
}

export default BranchCard