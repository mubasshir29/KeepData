import React from 'react'
import { FaRegEdit } from "react-icons/fa";

function InternetCard({internet}) {
     console.log("Connection:",internet)
  return (
    <div className='bg-slate-700 w-[540px] rounded-xl relative group '>
        <div className='absolute top-2 right-2 text-slate-500 invisible group-hover:visible'><FaRegEdit/></div>
        <table className='w-full mx-auto text-left'>
            <tr>
            <th className='pl-8 pt-3 pb-1 bg-indigo-500 rounded-tl-xl font-semibold'>Branch</th>
                <td className='px-3 pt-3 pb-1'>{internet.account_holder}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3 font-semibold'>Account No</th>
                <td className='px-3 py-1'>{internet.account_no}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3 font-semibold'>Bandwidth</th>
                <td className='px-3 py-1'>{internet.bandwidth}</td>
            </tr> 
            <tr> 
                <th className='pl-8 py-1  bg-indigo-500 w-1/3 font-semibold'>Branch</th>
                <td className='px-3 py-1'>{internet.branch}</td>
            </tr> 
            <tr> 
                <th className='pl-8 py-1  bg-indigo-500 w-1/3 font-semibold'>Comments</th>
                <td className='px-3'>{internet.comments}</td>
            </tr> 
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3 font-semibold'>ISP</th>
                <td className='px-3 py-1'>{internet.isp}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3 font-semibold'>Support</th>
                <td className='px-3 py-1'>{internet.support}</td>
            </tr>
            <tr>
                <th className='pl-8 pt-1 pb-3  bg-indigo-500 w-1/3 rounded-bl-xl font-semibold'>Type</th>
                <td className='px-3 pt-1 pb-3'>{internet.type}</td>
            </tr>
        </table>
    </div>
  )
}

export default InternetCard