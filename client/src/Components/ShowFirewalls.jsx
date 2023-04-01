import React,{useContext, useState, useEffect} from 'react'
import {DataContext} from './../Utilities/DataContextProvider'
import FirewallCard from './FirewallCard'
import {getAllFirewallDetails} from './../Utilities/api'
import { CSVLink } from "react-csv";
import { VscExport } from "react-icons/vsc";
import { useSelector } from 'react-redux';

function ShowFirewalls() {

  const allBranches = useSelector(state => state.dashboardReducer.allBranches)
  const allFirewalls= useSelector(state => state.dashboardReducer.allFirewalls)

  let file=''
  const fwHeaders = [
    { label: "Branch", key: "branch" },
    { label: "Name", key: "name" },
    { label: "Model", key: "model" },
    { label: "Serial", key: "serial" },
    { label: "IP Address", key: "management_ip" },
    { label: "Software", key: "software" },
    { label: "Support", key: "support" }
  ]

  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
      <div className='w-11/12 mx-auto text-white flex flex-col gap-12 justify-center flex-wrap'>
        
        {allBranches && allBranches.map(branch => {
          let fwData =[]
          return <div className='flex flex-col-reverse gap-3'>
            
            <div className='flex gap-8 flex-wrap'>  
            {allFirewalls && allFirewalls.map(firewall =>  {
              if(branch.branch_code == firewall.branch){
                console.log(firewall.branch)
                fwData.push(firewall)
                file = firewall.branch
                return (<div>
                  <FirewallCard firewall={firewall} />
                </div>)
              }
              })}
          </div>
          <div className='flex w-full gap-3 items-center'>
          <h1 className='text-3xl text-white'>{branch.name}</h1>
          <div className='bg-slate-700 flex-grow-0 flex items-center py-0.5 px-4 rounded-full '><CSVLink  data={fwData} headers={fwHeaders} filename={`${file}_firewalls.csv`} className='flex gap-2 items-center'>Export <VscExport/></CSVLink ></div>
          </div>
          </div>}
        )}

      </div>
    </div>
  )
}

export default ShowFirewalls