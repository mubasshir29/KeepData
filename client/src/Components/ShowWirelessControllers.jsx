import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaRegEdit } from "react-icons/fa";
import { CSVLink } from "react-csv";
import { VscExport } from "react-icons/vsc";
import { NavLink } from 'react-router-dom';
import {getWlcData, getBranchData,delWlcData} from './../Redux/dataSlice.js'
import { MdDeleteOutline } from "react-icons/md";
import ConfirmPage from './ConfirmPage.jsx';


function ShowWirelessControllers() {
  const dispatch = useDispatch()
  const allBranches = useSelector(state => state.dataReducer.allBranches)
  const allWLC= useSelector(state => state.dataReducer.allWLC)
  const logged = useSelector((state)=>state.authReducer.loggedStatus)

  const [showDialog, setShowDialog] = useState(false)
  const [deleteID,setDeleteID] = useState()


  let branchHasWLC = []
  if(allWLC){
    allWLC.forEach(controller => {
      if(branchHasWLC.includes(controller.branch)){
        return;
      }
      else
        {
          branchHasWLC.push(controller.branch)
        }
    })
  }
  console.log("Branches with WLC:",branchHasWLC)

  const wlcHeaders = [
    { label: "Branch", key: "branch" },
    { label: "Controller", key: "name" },
    { label: "Name", key: "model" },
    { label: "Serial", key: "serial" },
    { label: "IP Address", key: "management_ip" },
    { label: "MAC address", key: "software" },
    { label: "Description", key: "support" }
  ]

  const apHeaders = [
    { label: "Branch", key: "branch" },
    { label: "Controller", key: "controller" },
    { label: "Name", key: "name" },
    { label: "Model", key: "model" },
    { label: "Serial", key: "serial" },
    { label: "IP Address", key: "management_ip" },
    { label: "MAC address", key: "mac_address" },
    { label: "Description", key: "description" }
  ]

  let file=''
  
  let wlcData =[]

  const handleDeleteWLC = async (id)=>{
    console.log(id)
    //const response = await deleteSSID(id)
    setDeleteID(id)
    setShowDialog(true)
    //console.log(response)
  }

  useEffect(()=>{
    dispatch(getBranchData())
    dispatch(getWlcData())
  },[])


  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
      <div className='w-11/12 mx-auto text-slate-300 flex flex-col gap-12 justify-center flex-wrap'>
        {branchHasWLC && branchHasWLC.map(branch =>{
          let wlcData =[]
          return (
            <div className='flex flex-col-reverse gap-2 w-full'>
              
              <table className='text-center w-full'>
                <tr className='bg-indigo-500 text-lg'>
                  <th className='py-1 '>Location</th>
                  <th className='py-1 '>Name</th>
                  <th className='py-1 '>Model</th>
                  <th className='py-1 '>Serial</th>
                  <th className='py-1 '>IP</th>
                  <th className='py-1 '>Software</th>
                  <th className='py-1 '>Support</th>
                  {logged && <th className='py-1 pr-2'>Action</th>}
                </tr>
                {allWLC && allWLC.map(controller =>{
                  if(branch == controller.branch){
                    wlcData.push(controller)
                    file = controller.branch
                    return (<tr className='bg-slate-700 text-sm hover:text-indigo-300 hover:cursor-pointer odd:bg-slate-800 relative group'>
                      <td className='py-1'>{controller.branch}</td>
                      <td className='py-1'>{controller.name}</td>
                      <td className='py-1'>{controller.model}</td>
                      <td className='py-1'>{controller.serial}</td>
                      <td className='py-1'>{controller.management_ip}</td>
                      <td className='py-1'>{controller.software}</td>
                      <td className='py-1'>{controller.support}</td>
                      {logged && <td className='p-2'>
                      <div className='flex justify-center gap-3 text-lg'><NavLink to={`/edit-wlc/${controller._id}`}><div className=' text-slate-500 invisible group-hover:visible'><FaRegEdit/></div></NavLink>
                      <button onClick={()=>handleDeleteWLC(controller._id)}><div className=' text-slate-500 invisible group-hover:visible'><MdDeleteOutline/></div></button></div>
                      </td>}
                    </tr>)
                  }
                  })
                }
            </table>
            <div className='w-full flex gap-3'>
              <h2 className='text-2xl font-bold'>{(allBranches.find(e => e.branch_code == branch)).name}</h2>
              <div className='bg-slate-700 flex-grow-0 flex items-center py-0.5 px-4 rounded-full '><CSVLink  data={wlcData} headers={wlcHeaders} filename={`${file}_wlc.csv`} className='flex gap-2 items-center'>Export <VscExport/></CSVLink ></div>
              </div>
          </div>
          
          )
        })}
        
      </div>
      {showDialog && <ConfirmPage deleteCategory="wlc" deleteID={deleteID} setShowDialog={setShowDialog} />}
    </div>
  )
}

export default ShowWirelessControllers