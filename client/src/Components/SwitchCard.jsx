import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux'
import {deleteSwitch} from './../Utilities/api.js'


function SwitchCard({device}) {
    const logged = useSelector((state)=>state.authReducer.loggedStatus)
    const handleDeleteSwitch = async (id)=>{
        console.log(id)
        const response = await deleteSwitch(id)
        console.log(response)
    }
  return (
    <div className='relative group bg-slate-700 w-[540px] rounded-xl'>
        
        {logged && 
            <div className='absolute top-3 right-3 w-12 flex justify-between text-xl'>
                <NavLink to={`/edit-switch/${device._id}`}><div className='text-slate-500 invisible group-hover:visible'><FaRegEdit/></div></NavLink>
                <button onClick={()=>handleDeleteSwitch(device._id)}><div className='text-slate-500 invisible group-hover:visible'><MdDeleteOutline/></div></button>
            </div>
        }
        
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