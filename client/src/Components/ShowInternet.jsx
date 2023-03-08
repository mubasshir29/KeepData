import React from 'react'

function ShowInternet() {
  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
      <div className='inline-block rounded-t-lg'>
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
            
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default ShowInternet