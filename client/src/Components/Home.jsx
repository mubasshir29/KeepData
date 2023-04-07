import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { FaInternetExplorer,FaWifi } from "react-icons/fa";
import { BsFillHouseFill,BsFillShieldLockFill,BsHddNetworkFill,BsFillDiagram3Fill } from "react-icons/bs";
import { HiBuildingOffice } from "react-icons/hi2";
import { VscServerProcess } from "react-icons/vsc";
import { MdRouter,MdSettings } from "react-icons/md";
import DashboardCard from './DashboardCard';
import { useSelector } from 'react-redux';

function Home() {

    const allBranches = useSelector(state => state.dataReducer.allBranches)
    const allInternet= useSelector(state => state.dataReducer.allInternet)
    const allFirewalls= useSelector(state => state.dataReducer.allFirewalls)
    const allSwitches= useSelector(state => state.dataReducer.allSwitches)
    const allWLC= useSelector(state => state.dataReducer.allWLC)
    const allSSID= useSelector(state => state.dataReducer.allSSID)
    const allAPS= useSelector(state => state.dataReducer.allAPS)

  return (
    <div className='w-full flex flex-col ml-64 mt-20'>

        <div className='summary-dashboard flex flex-col gap-3 w-11/12 mx-auto my-6 pt-3 pb-6 px-6 bg-slate-800 rounded-lg'>
          <h2 className='text-xl font-bold'><span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Dashboard</span></h2>
          <div className='dashboard-cards flex flex-wrap gap-8 justify-center'>

            <NavLink to='/branches'>
            <DashboardCard details={{title:"Branches",value: allBranches.length}}>
              <HiBuildingOffice/>
            </DashboardCard>
            </NavLink>

            <NavLink to='/internet'>
            <DashboardCard details={{title:"Internet",value:allInternet.length}}>
              <FaInternetExplorer/>
            </DashboardCard>
            </NavLink>

            <NavLink to='/firewall'>
            <DashboardCard details={{title:"Firewalls",value:allFirewalls.length}}>
              <BsFillShieldLockFill/>
            </DashboardCard>
            </NavLink>

            <NavLink to='/switches'>
            <DashboardCard details={{title:"Switches",value:allSwitches.length}}>
              <BsHddNetworkFill/>
            </DashboardCard>
            </NavLink>

            <NavLink to='/wireless'>
            <DashboardCard details={{title:"WLC",value:allWLC.length}}>
              <VscServerProcess/>
            </DashboardCard>
            </NavLink>

            <NavLink to='/branches'>
            <DashboardCard details={{title:"SSID",value:allSSID.length}}>
              <FaWifi/>
            </DashboardCard>
            </NavLink>

            <NavLink to='/access-points'>
            <DashboardCard details={{title:"WiFi AP",value:allAPS.length}}>
              <MdRouter/>
            </DashboardCard>
            </NavLink>


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