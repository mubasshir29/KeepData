import React from 'react'
import {NavLink} from 'react-router-dom'
import { FaAmazon, FaHome, FaInternetExplorer,FaWifi } from "react-icons/fa";
import { BsFillHouseFill,BsFillShieldLockFill,BsHddNetworkFill,BsFillDiagram3Fill } from "react-icons/bs";
import { HiBuildingOffice } from "react-icons/hi2";
import { MdRouter,MdSettings } from "react-icons/md";
import { IoMdWifi } from "react-icons/io";



function Sidebar() {
  return (
    <div className='sm:block min-h-full bg-sidebar w-64 mt-16 fixed '>
        <section>
            <ul className='w-full pt-6 flex flex-col text-lg text-gray-400 items-left'>
                <NavLink className='pl-10 py-2 w-full focus:outline-none hover:bg-purple-500 active:bg-purple-500 hover:text-white' to='/'><li className='flex items-center gap-3'><BsFillHouseFill/> Home</li></NavLink>
                <NavLink className='pl-10 py-2 w-full focus:outline-none hover:bg-purple-500 active:bg-purple-500 hover:text-white' to='/branches'><li className='flex items-center gap-3'><HiBuildingOffice/>Branches</li></NavLink>
                <NavLink className='pl-10 py-2 w-full focus:outline-none hover:bg-purple-500 active:bg-purple-500 hover:text-white' to='/internet'><li className='flex items-center gap-3'><FaInternetExplorer/>Internet Accounts</li></NavLink>
                <NavLink className='pl-10 py-2 w-full focus:outline-none hover:bg-purple-500 active:bg-purple-500 hover:text-white' to='/firewall'><li className='flex items-center gap-3'><BsFillShieldLockFill/>Firewall</li></NavLink>
                <NavLink className='pl-10 py-2 w-full focus:outline-none hover:bg-purple-500 active:bg-purple-500 hover:text-white' to='/switches'><li className='flex items-center gap-3'><BsHddNetworkFill/>Switches</li></NavLink>
                <NavLink className='pl-10 py-2 w-full focus:outline-none hover:bg-purple-500 active:bg-purple-500 hover:text-white' to='/wireless'><li className='flex items-center gap-3'><FaWifi/>WLC</li></NavLink>
                <NavLink className='pl-10 py-2 w-full focus:outline-none hover:bg-purple-500 active:bg-purple-500 hover:text-white' to='/ssid'><li className='flex items-center gap-3'><IoMdWifi/>SSID</li></NavLink>
                <NavLink className='pl-10 py-2 w-full focus:outline-none hover:bg-purple-500 active:bg-purple-500 hover:text-white' to='/access-points'><li className='flex items-center gap-3'><MdRouter/>Access Points</li></NavLink>
                <NavLink className='pl-10 py-2 w-full focus:outline-none hover:bg-purple-500 active:bg-purple-500 hover:text-white' to='/diagrams'><li className='flex items-center gap-3'><BsFillDiagram3Fill/>Diagrams</li></NavLink>
                <NavLink className='pl-10 py-2 w-full focus:outline-none hover:bg-purple-500 active:bg-purple-500 hover:text-white' to='/settings'><li className='flex items-center gap-3'><MdSettings/>Settings</li></NavLink>
                
            </ul>
        </section>
    </div>
  )
}

export default Sidebar