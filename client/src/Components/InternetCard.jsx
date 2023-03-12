import React from 'react'

function InternetCard({internet}) {
     console.log("Connection:",internet)
  return (
    <div className='bg-slate-700 w-[480px] rounded-xl '>
        <table className='w-full mx-auto text-left'>
            <tr>
                <th className='pl-8 py-1 bg-indigo-500 rounded-tl-xl'>Account holder</th>
                <td className='px-3 py-1'>{internet.account_holder}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3'>Account No</th>
                <td className='px-3 py-1'>{internet.account_no}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3'>Bandwidth</th>
                <td className='px-3 py-1'>{internet.bandwidth}</td>
            </tr> 
            <tr> 
                <th className='pl-8 py-1  bg-indigo-500 w-1/3'>Branch</th>
                <td className='px-3 py-1'>{internet.branch}</td>
            </tr> 
            <tr> 
                <th className='pl-8 py-1  bg-indigo-500 w-1/3'>Comments</th>
                <td className='px-3'>{internet.comments}</td>
            </tr> 
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3'>ISP</th>
                <td className='px-3 py-1'>{internet.isp}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3'>Support</th>
                <td className='px-3 py-1'>{internet.support}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3 rounded-bl-xl'>Type</th>
                <td className='px-3 py-1'>{internet.type}</td>
            </tr>
        </table>
    </div>
  )
}

export default InternetCard