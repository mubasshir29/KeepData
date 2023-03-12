import React,{useContext} from 'react'
import {DataContext} from './../Utilities/DataContextProvider'
import BranchCard from './BranchCard.jsx'

function Branches() {
  const {branches} = useContext(DataContext) 
  //console.log("Branches:",branches)
  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
      <div className='w-11/12 mx-auto text-white flex gap-6 justify-center flex-wrap' >
          {branches && branches.map(branch =>{
           return <BranchCard branch={branch}/>
          })}
      </div>
      {/* <div className='inline-block rounded-t-lg'>
        <table className='w-11/12 mx-auto my-6 pt-3 pb-6 px-6 '>
          <thead>
            <tr className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-lg'>
              <th>Name</th>
              <th>Branch Code</th>
              <th>Contact</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody className='text-white text-center'>
            {branches && branches.map(branch => {
              return(<tr className='text-md bg-slate-800 odd:bg-slate-700'>
                <td className='p-1'>{branch.name}</td>
                <td className='p-1'>{branch.branch_code}</td>
                <td className='p-1'>{branch.contact}</td>
                <td className='p-1'>{branch.location}</td>
              </tr>)
            })}
          </tbody>
        </table>
      </div> */}   
    </div>
  )
}

export default Branches