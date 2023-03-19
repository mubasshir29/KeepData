import React,{useContext} from 'react'
import {DataContext} from './../Utilities/DataContextProvider'
import InternetCard from './InternetCard'
import { CSVLink } from "react-csv";
import { VscExport } from "react-icons/vsc";

function ShowInternet() {
  const {branches,connections} = useContext(DataContext)

  let file=''
  const internetHeaders = [
    { label: "Branch", key: "branch" },
    { label: "ISP", key: "isp" },
    { label: "Type", key: "type" },
    { label: "Account No", key: "account_no" },
    { label: "Account Holder", key: "account_holder" },
    { label: "Bandwidth", key: "bandwidth" },
    { label: "Support", key: "support" }
  ]
  
  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
    <div className='w-11/12 mx-auto text-white flex flex-col gap-12 justify-center flex-wrap'>
      
      {branches && branches.map(branch => { 
        let internetData =[]
        return <div className='flex flex-col-reverse gap-3'>
          
          <div className='flex gap-8 flex-wrap'>  
          {connections && connections.map(internet =>  {
            if(branch.branch_code == internet.branch){
              console.log(internet.branch)
              internetData.push(internet)
                file = internet.branch
              return (<div>
                <InternetCard internet={internet} />
              </div>)
            }
            })}
        </div>
        <div className='flex w-full gap-3 items-center'>
          <h1 className='text-3xl text-white'>{branch.name}</h1>
          <div className='bg-slate-700 flex-grow-0 flex items-center py-0.5 px-4 rounded-full '><CSVLink  data={internetData} headers={internetHeaders} filename={`${file}_internet.csv`} className='flex gap-2 items-center'>Export <VscExport/></CSVLink ></div>
          </div>
        </div>}
      )}

    </div>
  </div>
  )
}

export default ShowInternet