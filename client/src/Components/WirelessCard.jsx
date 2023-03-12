import React from 'react'

function WirelessCard({data}) {
    console.log(data)
  return (
    <div className='bg-slate-700 w-[540px] '>
        {/* <table className='w-full mx-auto text-left'>
            <tr>
                <th className='pl-8 py-1 bg-purple-500'>Branch</th>
                <td className='px-3 py-1'>{wireless.branch}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-purple-500 w-1/3'>Management IP</th>
                <td className='px-3 py-1'>{wireless.management_ip}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-purple-500 w-1/3'>Model</th>
                <td className='px-3 py-1'>{wireless.model}</td>
            </tr> 
            <tr> 
                <th className='pl-8 py-1  bg-purple-500 w-1/3'>Name</th>
                <td className='px-3 py-1'>{wireless.name}</td>
            </tr> 
            <tr> 
                <th className='pl-8 py-1  bg-purple-500 w-1/3'>Serial</th>
                <td className='px-3'>{wireless.serial}</td>
            </tr> 
            <tr>
                <th className='pl-8 py-1  bg-purple-500 w-1/3'>Software</th>
                <td className='px-3 py-1'>{wireless.software}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-purple-500 w-1/3'>Support</th>
                <td className='px-3 py-1'>{wireless.support}</td>
            </tr>
        </table> */}
    </div>
  )
}

export default WirelessCard