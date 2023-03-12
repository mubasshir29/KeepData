import React from 'react'

function FirewallCard({firewall}) {
  return (
    <div className='bg-slate-700 w-[540px] '>
        <table className='w-full mx-auto text-left'>
            <tr>
                <th className='pl-8 py-1 bg-indigo-500'>Branch</th>
                <td className='px-3 py-1'>{firewall.branch}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3'>Name</th>
                <td className='px-3 py-1'>{firewall.name}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3'>Model</th>
                <td className='px-3 py-1'>{firewall.model}</td>
            </tr> 
            <tr> 
                <th className='pl-8 py-1  bg-indigo-500 w-1/3'>Serial</th>
                <td className='px-3 py-1'>{firewall.serial}</td>
            </tr> 
            <tr> 
                <th className='pl-8 py-1  bg-indigo-500 w-1/3'>Mgmt IP</th>
                <td className='px-3'>{firewall.management_ip}</td>
            </tr> 
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3'>Software</th>
                <td className='px-3 py-1'>{firewall.software}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3'>Support</th>
                <td className='px-3 py-1'>{firewall.support}</td>
            </tr>
        </table>
    </div>
  )
}

export default FirewallCard
