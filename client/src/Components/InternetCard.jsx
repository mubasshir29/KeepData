import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {delInternetData} from './../Redux/dataSlice.js'
import { MdDeleteOutline } from "react-icons/md";

function InternetCard({internet}) {
     //console.log("Connection:",internet)
     const logged = useSelector((state)=>state.authReducer.loggedStatus)
    const dispatch = useDispatch()

    const handleDeleteBranch = async (id)=>{
        console.log(id)
        //const response = await deleteAP(id)
        dispatch(delInternetData(id))
        //console.log(response)
      }

  return (
    <div className='bg-slate-700 w-[540px] rounded-xl relative group '>
        {logged && <div className='absolute invisible group-hover:visible top-2 right-0 w-12 flex gap-1 text-lg text-gray-500 items-center'>
            <NavLink to={`/edit-internet/${internet._id}`}><FaRegEdit/></NavLink>
            <button onClick={()=>handleDeleteBranch(internet._id)}><MdDeleteOutline/></button>
            </div>}
        <table className='w-full mx-auto text-left'>
            <tr> 
                <th className='pl-8 py-1 rounded-tl-xl bg-indigo-500 w-1/3 font-semibold'>Branch</th>
                <td className='px-3 py-1'>{internet.branch}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3 font-semibold'>ISP</th>
                <td className='px-3 py-1'>{internet.isp}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3 font-semibold'>Account No</th>
                <td className='px-3 py-1'>{internet.account_no}</td>
            </tr>
            <tr>
            <th className='pl-8 pt-3 pb-1 bg-indigo-500  font-semibold'>Account holder</th>
                <td className='px-3 pt-3 pb-1'>{internet.account_holder}</td>
            </tr>
            <tr>
                <th className='pl-8 pt-1 pb-3  bg-indigo-500 w-1/3  font-semibold'>Type</th>
                <td className='px-3 pt-1 pb-3'>{internet.type}</td>
            </tr>
            <tr>
                <th className='pl-8 py-1  bg-indigo-500 w-1/3 font-semibold'>Bandwidth</th>
                <td className='px-3 py-1'>{internet.bandwidth}</td>
            </tr> 
            
            <tr> 
                <th className='pl-8 py-1  bg-indigo-500 w-1/3 font-semibold'>Comments</th>
                <td className='px-3'>{internet.comments}</td>
            </tr> 
            <tr>
                <th className='pl-8 py-1 rounded-bl-xl bg-indigo-500 w-1/3 font-semibold'>Support</th>
                <td className='px-3 py-1'>{internet.support}</td>
            </tr>
        </table>
    </div>
  )
}

export default InternetCard