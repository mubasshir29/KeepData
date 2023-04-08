import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaRegEdit } from "react-icons/fa";
import { CSVLink } from "react-csv";
import { VscExport } from "react-icons/vsc";
import { NavLink } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import {deleteSSID} from './../Utilities/api.js'
import {getSsidData, getBranchData,delSsidData} from './../Redux/dataSlice.js'
import ConfirmPage from './ConfirmPage.jsx';

function ShowSSID() {
    const dispatch = useDispatch()
    const allBranches = useSelector(state => state.dataReducer.allBranches)
    const allSSID= useSelector(state => state.dataReducer.allSSID)
    const logged = useSelector((state)=>state.authReducer.loggedStatus)

    const [showDialog, setShowDialog] = useState(false)
    const [deleteID,setDeleteID] = useState()

    let branchHasSSID = []
    if(allSSID){
      allSSID.forEach(id => {
        if(branchHasSSID.includes(id.branch)){
            return;
        }
        else
            {
                branchHasSSID.push(id.branch)
            }
        })
    }
    //console.log(branchHasSSID)
    let ssidData =[]
    let file=''

    const ssidHeaders = [
        { label: "Branch", key: "branch" },
        { label: "Controller", key: "controller" },
        { label: "SSID", key: "ssid" },
        { label: "Password", key: "password" },
        { label: "Description", key: "description" }
      ]

      const handleDeleteSSID = async (id)=>{
        console.log(id)
        //const response = await deleteSSID(id)
        setDeleteID(id)
        setShowDialog(true)
        //console.log(response)
      }

      useEffect(()=>{
        dispatch(getBranchData())
        dispatch(getSsidData())
      },[])

  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
        <div className='w-11/12 mx-auto text-slate-300 flex flex-col gap-12 justify-center flex-wrap'>
          {branchHasSSID && branchHasSSID.map(branch =>{
           return <div className='flex flex-col-reverse'>
            
          <table className='text-center w-full bg-yellow-300'>
            <tr className='bg-indigo-500 '>
              <th className='py-1'>Branch</th>
              <th className='py-1'>Controller</th>
              <th className='py-1'>SSID</th>
              <th className='py-1'>Password</th>
              <th className='py-1'>Description</th>
              {logged && <th className='py-1 pr-2'>Action</th>}
            </tr>

            {allSSID && allSSID.map(wifi=>{
              if(wifi.branch == branch){
                ssidData.push(wifi)
                console.log(wifi)
                file = wifi.branch
                return(<tr className='bg-slate-700 text-sm hover:text-indigo-300 hover:cursor-pointer odd:bg-slate-800 relative group'>
                  <td className='p-1'>{wifi.branch}</td>
                  <td className='p-1'>{wifi.controller}</td>
                  <td className='p-1'>{wifi.ssid}</td>
                  <td className='p-1'>{logged ? wifi.password : "*******"}</td>
                  <td className='p-1'>{wifi.description}</td>
                  {logged && <td className='p-2'>
                      <div className='flex justify-center gap-3 text-lg'><NavLink to={`/edit-ssid/${wifi._id}`}><div className=' text-slate-500 invisible group-hover:visible'><FaRegEdit/></div></NavLink>
                      <button onClick={()=>handleDeleteSSID(wifi._id)}><div className=' text-slate-500 invisible group-hover:visible'><MdDeleteOutline/></div></button></div>
                    </td>}
                </tr>) 
              }
            })}
          </table>
            <div className='flex w-full gap-3 mb-3'>
                {allBranches && <h2 className='text-2xl font-bold'>{(allBranches.find(e => e.branch_code == branch)).name}</h2>}
                <div className='bg-slate-700 flex-grow-0 flex items-center py-0.5 px-4 rounded-full '><CSVLink  data={ssidData} headers={ssidHeaders} filename={`${file}_ssids.csv`} className='flex gap-2 items-center'>Export <VscExport/></CSVLink ></div>
            </div>
          </div>})}
          </div>
          {showDialog && <ConfirmPage deleteCategory="ssid" deleteID={deleteID} setShowDialog={setShowDialog} />}
          </div>
  )
}

export default ShowSSID