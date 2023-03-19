import React from 'react'
import { FaRegEdit } from "react-icons/fa";

function SwitchCard({device}) {
  return (
    <div className='bg-slate-700 w-[540px] rounded-xl relative group'>
        <div className='absolute top-2 right-2 text-slate-500 invisible group-hover:visible'><FaRegEdit/></div>
        <table className='w-full mx-auto text-left'>
            <tr>
                <th className='pl-8 pt-3 pb-1 bg-indigo-500 rounded-tl-xl font-semibold'>Branch</th>
                <td className='px-3 pt-3 pb-1'>{device.branch}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3  font-semibold'>Name</th>
                <td className='px-3 py-1'>{device.switch_name}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3  font-semibold'>IP Address</th>
                <td className='px-3 py-1'>{device.ip_address}</td>
            </tr> 
            <tr> 
                <th className='pl-8 py-1  bg-indigo-500 w-1/3  font-semibold'>Model</th>
                <td className='px-3 py-1'>{device.model}</td>
            </tr> 
            <tr> 
                <th className='pl-8 py-1  bg-indigo-500 w-1/3  font-semibold'>Serial No</th>
                <td className='px-3'>{device.serial_no}</td>
            </tr> 
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3  font-semibold'>Software</th>
                <td className='px-3 py-1'>{device.software}</td>
            </tr>
            <tr>
                <th className='pl-8 pt-1 pb-3  bg-indigo-500 w-1/3 rounded-bl-xl  font-semibold'>Support</th>
                <td className='px-3 pt-1 pb-3'>{device.support}</td>
            </tr>
        </table>
    </div>
  )
}

export default SwitchCard