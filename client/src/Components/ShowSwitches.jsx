import React,{useEffect} from 'react'
import SwitchCard from './SwitchCard'
import { CSVLink } from "react-csv";
import { VscExport } from "react-icons/vsc";
import { useSelector, useDispatch } from 'react-redux'
import {getSwitchData, getBranchData} from './../Redux/dataSlice.js'

function ShowSwitches() {
  const dispatch = useDispatch()
  const allBranches = useSelector(state => state.dataReducer.allBranches)
  const allSwitches= useSelector(state => state.dataReducer.allSwitches)

  
  let file=''
  const swHeaders = [
    { label: "Branch", key: "branch" },
    { label: "Name", key: "switch_name" },
    { label: "IP Address", key: "ip_address" },
    { label: "Model", key: "model" },
    { label: "Serial", key: "serial_no" },
    { label: "Software", key: "software" },
    { label: "Support", key: "support" }
  ]

  useEffect(()=>{
    dispatch(getBranchData())
    dispatch(getSwitchData())
  },[])

  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
    <div className='w-11/12 mx-auto text-white flex flex-col gap-12 justify-center flex-wrap'>
      
      {allBranches && allBranches.map(branch => {
        let swData =[]
        return <div className='flex flex-col-reverse gap-3'>
          
          <div className='flex gap-8 flex-wrap'>  
          {allSwitches && allSwitches.map(nswitch =>  {
            
            if(branch.branch_code == nswitch.branch){
              console.log(nswitch.branch)
              swData.push(nswitch)
              file = nswitch.branch
              return (<div>
                <SwitchCard device={nswitch} />
              </div>)
            }
            })}
        </div>
        <div className='flex w-full gap-3 items-center'>
          <h1 className='text-3xl text-white'>{branch.name}</h1>
          <div className='bg-slate-700 flex-grow-0 flex items-center py-0.5 px-4 rounded-full '><CSVLink  data={swData} headers={swHeaders} filename={`${file}_switches.csv`} className='flex gap-2 items-center'>Export <VscExport/></CSVLink ></div>
          </div>
        </div>}
      )}

    </div>
  </div>
  )
}

export default ShowSwitches