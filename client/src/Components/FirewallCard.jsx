import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function FirewallCard({firewall}) {
    //console.log(firewall)
  return (
    <div className='bg-slate-700 w-[540px] rounded-xl relative group'>
        <NavLink to={`/edit-firewall/${firewall._id}`}><div className='absolute top-2 right-2 text-slate-500 invisible group-hover:visible'><FaRegEdit/></div></NavLink>
        <table className='w-full mx-auto text-left'>
            <tr>
                <th className='pl-8 pt-3 pb-1 bg-indigo-500 rounded-tl-xl  font-semibold'>Branch</th>
                <td className='px-3 pt-3 pb-1'>{firewall.branch}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3  font-semibold'>Name</th>
                <td className='px-3 py-1'>{firewall.name}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3  font-semibold'>Model</th>
                <td className='px-3 py-1'>{firewall.model}</td>
            </tr> 
            <tr> 
                <th className='pl-8 py-1  bg-indigo-500 w-1/3  font-semibold'>Serial</th>
                <td className='px-3 py-1'>{firewall.serial}</td>
            </tr> 
            <tr> 
                <th className='pl-8 py-1  bg-indigo-500 w-1/3  font-semibold'>Mgmt IP</th>
                <td className='px-3'>{firewall.management_ip}</td>
            </tr> 
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3  font-semibold'>Software</th>
                <td className='px-3 py-1'>{firewall.software}</td>
            </tr>
            <tr>
                <th className='pl-8 pt-1 pb-3  bg-indigo-500 w-1/3 rounded-bl-xl  font-semibold'>Support</th>
                <td className='px-3 pt-1 pb-3'>{firewall.support}</td>
            </tr>
        </table>
    </div>
  )
}

export default FirewallCard
