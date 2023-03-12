import React from 'react'
import { FaAmazon, FaHome, FaInternetExplorer,FaWifi } from "react-icons/fa";
import { BsFillHouseFill,BsFillShieldLockFill,BsHddNetworkFill,BsFillDiagram3Fill } from "react-icons/bs";
import { HiBuildingOffice } from "react-icons/hi2";
import { MdRouter,MdSettings } from "react-icons/md";

function DashboardCard(props) {
  return (
    <div className='card bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-64 h-32 rounded-xl flex items-center justify-around gap-1/2 hover:transition-transfor hover:scale-105 hover:duration-200 hover:ease-in-out'>
        <div className='flex flex-col items-left'>
            <h3 className='text-2xl font-bold text-white'>{props.details.title}</h3>
            <h4 className='text-white text-xl'>{props.details.value}</h4>
        </div>
        <div className='text-6xl opacity-40 text-white'>
            {props.children}
        </div>
    </div>
  )
}

export default DashboardCard