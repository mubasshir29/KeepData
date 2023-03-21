import React, { useContext } from 'react'
import {DataContext} from './../Utilities/DataContextProvider'
import WirelessCard from './WirelessCard'
import { useSelector, useDispatch } from 'react-redux'
import { FaRegEdit } from "react-icons/fa";
import { CSVLink } from "react-csv";
import { VscExport } from "react-icons/vsc";


function ShowWirelessControllers() {
  const logged = useSelector((state)=>state.loggedStatus)
  const {wlc,ssid,branches} = useContext(DataContext)
  let branchHasWLC = []
  if(wlc){
    wlc.forEach(controller => {
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
                </tr>
                {wlc && wlc.map(controller =>{
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
                      <div className='absolute top-2 right-2 text-slate-500 invisible group-hover:visible'><FaRegEdit/></div>
                    </tr>)
                  }
                  })
                }
            </table>
            <div className='w-full flex gap-3'>
              <h2 className='text-2xl font-bold'>{(branches.find(e => e.branch_code == branch)).name}</h2>
              <div className='bg-slate-700 flex-grow-0 flex items-center py-0.5 px-4 rounded-full '><CSVLink  data={wlcData} headers={wlcHeaders} filename={`${file}_wlc.csv`} className='flex gap-2 items-center'>Export <VscExport/></CSVLink ></div>
              </div>
          </div>
          
          )
        })}
        
      </div>
    </div>
  )
}

export default ShowWirelessControllers