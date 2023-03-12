import React, { useContext } from 'react'
import {DataContext} from './../Utilities/DataContextProvider'
import WirelessCard from './WirelessCard'

function ShowWirelessControllers() {
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

  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
      <div className='w-11/12 mx-auto text-slate-300 flex flex-col gap-12 justify-center flex-wrap'>
        {/* {ssid && ssid.map(id => {
          {wlc && wlc.map(wireless =>{
            if(id.branch == wireless.branch){
              return (<WirelessCard data={{wireless:wireless, ssid:id}} />)
            }
          })}
        })} */}
        {/* {wlc && wlc.map(wireless => {
          return (<WirelessCard data={{wireless:wireless, ssid:ssid}} />)
        })} */}
        {branchHasWLC && branchHasWLC.map(branch =>{
          return (<div className='flex flex-col gap-6 w-full'>
            <div className='flex flex-col gap-2 w-full'>
              <h2 className='text-2xl font-bold'>{(branches.find(e => e.branch_code == branch)).name}</h2>
              <h3 className='text-lg font-bold'>Wireless Controllers</h3>
              <table className='text-center w-full'>
                <tr className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                  <th>Location</th>
                  <th>Name</th>
                  <th>Model</th>
                  <th>Serial</th>
                  <th>IP</th>
                  <th>Software</th>
                  <th>Support</th>
                </tr>
                {wlc && wlc.map(controller =>{
                  if(branch == controller.branch){
                    return (<tr className='bg-slate-700 odd:bg-slate-800'>
                      <td>{controller.branch}</td>
                      <td>{controller.name}</td>
                      <td>{controller.model}</td>
                      <td>{controller.serial}</td>
                      <td>{controller.management_ip}</td>
                      <td>{controller.software}</td>
                      <td>{controller.support}</td>
                    </tr>)
                  }
                  })
                }
            </table>
          </div>
          <div className='flex flex-col w-full'>
          <h3 className='text-lg font-bold'>SSID</h3>
          <table className='text-center w-full'>
            <tr className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
              <th>Branch</th>
              <th>Controller</th>
              <th>SSID</th>
              <th>Password</th>
              <th>Description</th>
            </tr>
            {ssid && ssid.map(id=>{
              if(id.branch == branch){
                return(<tr className='bg-slate-700 odd:bg-slate-800'>
                  <td>{id.branch}</td>
                  <td>{id.controller}</td>
                  <td>{id.ssid}</td>
                  <td>{id.password}</td>
                  <td>{id.description}</td>
                </tr>)
              }
            })}
          </table>
          </div>
          </div>
          )
        })}
        
      </div>
    </div>
  )
}

export default ShowWirelessControllers