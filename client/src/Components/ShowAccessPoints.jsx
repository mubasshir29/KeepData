import React,{useContext, useState} from 'react'
import {DataContext} from './../Utilities/DataContextProvider'
import { FaRegEdit,FaFileExport } from "react-icons/fa";
import { CSVLink , CSVDownload } from "react-csv";
import { VscExport } from "react-icons/vsc";
import { NavLink } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import {deleteAP} from './../Utilities/api'


function ShowAccessPoints() {
  const {branches,ap} = useContext(DataContext)

  //export to csv
  
  const headers = [
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

  let branchesHasAPs = []

  if(ap){
    ap.forEach(router => {
      if(branchesHasAPs.includes(router.branch)){
        return;
      }
      else
        {
          branchesHasAPs.push(router.branch)
        }
    })
  }

  const handleDeleteAP = async (id)=>{
    console.log(id)
    const response = await deleteAP(id)
    console.log(response)

  }

  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
      <div className='w-11/12 mx-auto text-white flex gap-6 justify-center flex-wrap'>
        
        {branchesHasAPs.map(branch =>{
          let data =[]
          return(<div className='w-full flex flex-col-reverse'>
          {/* This is reverse column flex */}
          <table className='w-full text-center'>
            <tr className='bg-indigo-500'>
              <th className='py-1 pl-2'>Branch</th>
              <th className='py-1'>Controller</th>
              <th className='py-1'>Name</th>
              <th className='py-1'>Model</th>
              <th className='py-1'>Serial</th>
              <th className='py-1'>IP Address</th>
              <th className='py-1'>MAC</th>
              <th className='py-1 pr-2'>Description</th>
            </tr>
            {ap && ap.map(router => {
              if(router.branch == branch){
                data.push(router)
                file = router.branch
                // setFile(`${router.branch}_access_points`)
                return(
                  <tr className='text-sm bg-slate-700 odd:bg-slate-800  hover:text-indigo-300 hover:cursor-pointer relative group'>
                    <td className='p-2'>{router.branch}</td>
                    <td className='p-2'>{router.controller}</td>
                    <td className='p-2'>{router.name}</td>
                    <td className='p-2'>{router.model}</td>
                    <td className='p-2'>{router.serial}</td>
                    <td className='p-2'>{router.management_ip}</td>
                    <td className='p-2'>{router.mac_address}</td>
                    <td className='p-2'>{router.description}</td>
                    <NavLink to={`/edit-ap/${router._id}`}><div className='absolute top-2 right-8 text-slate-500 invisible group-hover:visible'><FaRegEdit/></div></NavLink>
                    <button onClick={()=>handleDeleteAP(router._id)}><div className='absolute top-2 right-2 text-slate-500 invisible group-hover:visible'><MdDeleteOutline/></div></button>
                  </tr>
                )
              }
            })}
          </table>
          <div className='flex w-full justify-between items-center'>
            <h2 className='text-2xl font-bold mb-2'>{(branches.find(e => e.branch_code == branch)).name}</h2>
            <div className='bg-slate-700 flex items-center py-0.5 px-4 rounded-full '><CSVLink  data={data} headers={headers} filename={`${file}_Access_Points.csv`} className='flex gap-2 items-center'>Export <VscExport/></CSVLink ></div>
          </div>
          </div>)
        })}
      </div>
    </div>
  )
}

export default ShowAccessPoints
