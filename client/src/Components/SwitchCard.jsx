import React from 'react'

function SwitchCard({device}) {
  return (
    <div className='bg-slate-700 w-[540px] '>
        <table className='w-full mx-auto text-left'>
            <tr>
                <th className='pl-8 py-1 bg-indigo-500'>Branch</th>
                <td className='px-3 py-1'>{device.branch}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3'>Name</th>
                <td className='px-3 py-1'>{device.switch_name}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3'>IP Address</th>
                <td className='px-3 py-1'>{device.ip_address}</td>
            </tr> 
            <tr> 
                <th className='pl-8 py-1  bg-indigo-500 w-1/3'>Model</th>
                <td className='px-3 py-1'>{device.model}</td>
            </tr> 
            <tr> 
                <th className='pl-8 py-1  bg-indigo-500 w-1/3'>Serial No</th>
                <td className='px-3'>{device.serial_no}</td>
            </tr> 
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3'>Software</th>
                <td className='px-3 py-1'>{device.software}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3'>Support</th>
                <td className='px-3 py-1'>{device.support}</td>
            </tr>
        </table>
    </div>
  )
}

export default SwitchCard