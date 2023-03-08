import React from 'react'
import { FaAmazon, FaHome, FaInternetExplorer,FaWifi } from "react-icons/fa";
import { BsFillHouseFill,BsFillShieldLockFill,BsHddNetworkFill,BsFillDiagram3Fill } from "react-icons/bs";
import { HiBuildingOffice } from "react-icons/hi2";
import { MdRouter,MdSettings } from "react-icons/md";
import DashboardCard from './DashboardCard';
function Home() {
    console.log("Home screen loaded")
  return (
    <div className='w-full flex flex-col ml-64 mt-20'>

        <div className='summary-dashboard flex flex-col gap-3 w-11/12 mx-auto my-6 pt-3 pb-6 px-6 bg-slate-800 rounded-lg'>
          <h2 className='text-xl font-bold'><span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Dashboard</span></h2>
          <div className='dashboard-cards flex flex-wrap gap-8 justify-center'>

            <DashboardCard details={{title:"Branches",value:"6"}}>
              <HiBuildingOffice/>
            </DashboardCard>

            <DashboardCard details={{title:"Internet",value:"17"}}>
              <FaInternetExplorer/>
            </DashboardCard>

            <DashboardCard details={{title:"Firewalls",value:"8"}}>
              <BsFillShieldLockFill/>
            </DashboardCard>

            <DashboardCard details={{title:"Switches",value:"10"}}>
              <BsHddNetworkFill/>
            </DashboardCard>

            <DashboardCard details={{title:"Wireless",value:"100"}}>
              <FaWifi/>
            </DashboardCard>

            <DashboardCard details={{title:"Access Points",value:"100"}}>
              <MdRouter/>
            </DashboardCard>

          </div>
        </div>

        <div className='summary-dashboard flex flex-col gap-3 w-11/12 mx-auto my-6 pt-3 pb-6 px-6 bg-slate-800 rounded-lg'>
        <h2 className='text-xl font-bold'><span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Overview</span></h2>
          <div className='dashboard-cards flex gap-6 justify-between'>
            <div className='card bg-gray-700 w-64 h-80 rounded-xl flex flex-col items-center justify-center gap-2'>
              <h3 className='text-lg font-bold text-slate-800'>Category</h3>
              <h4 className='text-slate-800'>100</h4>
            </div>
            <div className='card bg-gray-700 w-64 h-80 rounded-xl flex flex-col items-center justify-center gap-2'>
              <h3 className='text-lg font-bold text-slate-800'>Category</h3>
              <h4 className='text-slate-800'>100</h4>
            </div>
            <div className='card bg-gray-700 w-64 h-80 rounded-xl flex flex-col items-center justify-center gap-2'>
              <h3 className='text-lg font-bold text-slate-800'>Category</h3>
              <h4 className='text-slate-800'>100</h4>
            </div>
            <div className='card bg-gray-700 w-64 h-80 rounded-xl flex flex-col items-center justify-center gap-2'>
              <h3 className='text-lg font-bold text-slate-800'>Category</h3>
              <h4 className='text-slate-800'>100</h4>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Home