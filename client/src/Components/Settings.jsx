import React from 'react'
import {NavLink} from 'react-router-dom'
import { FaAmazon, FaHome, FaInternetExplorer,FaWifi } from "react-icons/fa";
import { BsFillHouseFill,BsFillShieldLockFill,BsHddNetworkFill,BsFillDiagram3Fill } from "react-icons/bs";
import { HiBuildingOffice } from "react-icons/hi2";
import { MdRouter } from "react-icons/md";
import AddItemCard from './AddItemCard';
import { useSelector, useDispatch } from 'react-redux'
import {setLogin, setLogout} from './../Redux/authSlice.js'
import { IoMdWifi } from "react-icons/io";

function Settings() {
  

  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
      <div className='cards-container flex gap-8 w-11/12 mx-auto mt-10 flex-wrap justify-center'>

        <AddItemCard values={{card_title:"Add Branch",card_text:"Add a new office", nav_link:"add-branch"}}>
          <HiBuildingOffice/>
        </AddItemCard>

        <AddItemCard values={{card_title:"Add Internet",card_text:"Add a WAN connection", nav_link:"add-internet"}}>
          <FaInternetExplorer/>
        </AddItemCard>

        <AddItemCard values={{card_title:"Add Firewall",card_text:"Add a new firewall", nav_link:"add-firewall"}}>
          <BsFillShieldLockFill/>
        </AddItemCard>

        <AddItemCard values={{card_title:"Add Switch",card_text:"Add a new switch", nav_link:"add-switch"}}>
          <BsHddNetworkFill/>
        </AddItemCard>

        <AddItemCard values={{card_title:"Add WLC",card_text:"Add a new WLC", nav_link:"add-wlc"}}>
          <FaWifi/>
        </AddItemCard>

        <AddItemCard values={{card_title:"Add SSID",card_text:"Add a new SSID", nav_link:"add-ssid"}}>
          <IoMdWifi/>
        </AddItemCard>

        <AddItemCard values={{card_title:"Add Access Point",card_text:"Add a new AP", nav_link:"add-ap"}}>
          <MdRouter/>
        </AddItemCard>
        
        <AddItemCard values={{card_title:"Add Diagram",card_text:"Add a new diagram", nav_link:"add-diag"}}>
          <BsFillDiagram3Fill/>
        </AddItemCard>
      </div>
    </div>
  )
}

export default Settings