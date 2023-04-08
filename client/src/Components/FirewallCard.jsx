import React,{useState} from 'react'
import { FaRegEdit } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {delFirewallData} from './../Redux/dataSlice.js'
import { MdDeleteOutline } from "react-icons/md";
import ConfirmPage from './ConfirmPage.jsx';

function FirewallCard({firewall}) {
    //console.log(firewall)
    const logged = useSelector((state)=>state.authReducer.loggedStatus)
    const dispatch = useDispatch()

    const [showDialog, setShowDialog] = useState(false)
    const [deleteID,setDeleteID] = useState()

    const handleDeleteBranch = async (id)=>{
        console.log(id)
        //const response = await deleteAP(id)
        setDeleteID(id)
        setShowDialog(true)
        //console.log(response)
      }
  return (
    <div className='bg-slate-700 w-[540px] rounded-xl relative group'>
        {logged && <div className='absolute invisible group-hover:visible top-2 right-0 w-12 flex gap-1 text-lg text-gray-500 items-center'>
            <NavLink to={`/edit-firewall/${firewall._id}`}><FaRegEdit/></NavLink>
            <button onClick={()=>handleDeleteBranch(firewall._id)}><MdDeleteOutline/></button>
            </div>}
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
        {showDialog && <ConfirmPage deleteCategory="firewall" deleteID={deleteID} setShowDialog={setShowDialog} />}
    </div>
  )
}

export default FirewallCard
