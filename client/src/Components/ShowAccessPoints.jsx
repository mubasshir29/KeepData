import React,{useContext} from 'react'
import {DataContext} from './../Utilities/DataContextProvider'

function ShowAccessPoints() {
  const {branches,ap} = useContext(DataContext)
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

  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
      <div className='w-11/12 mx-auto text-white flex gap-6 justify-center flex-wrap'>
        
        {branchesHasAPs.map(branch =>{
          return(<div className='w-full'>
            <h2 className='text-2xl font-bold mb-2'>{(branches.find(e => e.branch_code == branch)).name}</h2>
          <table className='w-full text-center'>
            <tr className='bg-purple-500'>
              <th>Branch</th>
              <th>Controller</th>
              <th>Name</th>
              <th>Model</th>
              <th>Serial</th>
              <th>IP Address</th>
              <th>MAC</th>
              <th>Description</th>
            </tr>
            {ap && ap.map(router => {
              if(router.branch == branch){
                return(
                  <tr className='text-sm bg-slate-700 odd:bg-slate-800'>
                    <td className='p-2'>{router.branch}</td>
                    <td className='p-2'>{router.controller}</td>
                    <td className='p-2'>{router.name}</td>
                    <td className='p-2'>{router.model}</td>
                    <td className='p-2'>{router.serial}</td>
                    <td className='p-2'>{router.management_ip}</td>
                    <td className='p-2'>{router.mac_address}</td>
                    <td className='p-2'>{router.description}</td>
                  </tr>
                )
              }
            })}
          </table>
          </div>)
        })}
      </div>
    </div>
  )
}

export default ShowAccessPoints
