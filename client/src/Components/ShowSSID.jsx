import React,{useContext} from 'react'
import {DataContext} from './../Utilities/DataContextProvider'
import { useSelector, useDispatch } from 'react-redux'
import { FaRegEdit } from "react-icons/fa";
import { CSVLink } from "react-csv";
import { VscExport } from "react-icons/vsc";
import { NavLink } from 'react-router-dom';

function ShowSSID() {
    const {ssid,branches} = useContext(DataContext)
    const logged = useSelector((state)=>state.loggedStatus)

    let branchHasSSID = []
    if(ssid){
        ssid.forEach(id => {
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

  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
        <div className='w-11/12 mx-auto text-slate-300 flex flex-col gap-12 justify-center flex-wrap'>
          {branchHasSSID && branchHasSSID.map(branch =>{
           return <div className='flex flex-col-reverse'>
            
          <table className='text-center w-full'>
            <tr className='bg-indigo-500 c'>
              <th className='py-1'>Branch</th>
              <th className='py-1'>Controller</th>
              <th className='py-1'>SSID</th>
              <th className='py-1'>Password</th>
              <th className='py-1'>Description</th>
            </tr>

            {ssid && ssid.map(wifi=>{
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
                  <NavLink to={`/edit-ssid/${wifi._id}`}><div className='absolute top-2 right-2 text-slate-500 invisible group-hover:visible'><FaRegEdit/></div></NavLink>
                </tr>) 
              }
            })}
          </table>
            <div className='flex w-full gap-3 mb-3'>
                {branches && <h2 className='text-2xl font-bold'>{(branches.find(e => e.branch_code == branch)).name}</h2>}
                <div className='bg-slate-700 flex-grow-0 flex items-center py-0.5 px-4 rounded-full '><CSVLink  data={ssidData} headers={ssidHeaders} filename={`${file}_ssids.csv`} className='flex gap-2 items-center'>Export <VscExport/></CSVLink ></div>
            </div>
          </div>})}
          </div>
          </div>
  )
}

export default ShowSSID