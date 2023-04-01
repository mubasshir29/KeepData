import React, { useState, useContext, useEffect } from 'react'
import logo from './../images/Keep_Data_logo_2.png'
import {NavLink,useNavigate} from 'react-router-dom'
import { checkLoginStatus } from '../Utilities/api'
import {DataContext} from './../Utilities/DataContextProvider.js'
import { useSelector, useDispatch } from 'react-redux'
import {setLogin, setLogout} from './../Redux/authSlice.js'

function Navbar() {
  const logged = useSelector((state)=>state.authReducer.loggedStatus)
  const username = useSelector((state)=>state.authReducer.username)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleLoginButton = (e)=>{
    navigate('/login')
  }

  const handleLogoutButton = (e)=>{
    dispatch(setLogout())
    localStorage.removeItem("token")
    navigate('/')
  }

  useEffect(()=>{

  })
 
  return (
    <div className='nav-container w-full bg-slate-800 py-3 h-18 fixed z-10'>
        <div className='nav-bar w-full px-10 mx-auto flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
          <h1 className='text-white text-4xl font-bold'>Keep<span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Data</span></h1>
          </div>
            <div className='nav-list text-white text-lg'>
                <ul className='flex justify-between gap-6'>
                    <li className='bg-indigo-500 rounded-2xl py-1 px-4'>{logged ? <button className='focus:outline-none' onClick={e=>handleLogoutButton(e)}>Logout</button> : <button className='focus:outline-none' onClick={e=>handleLoginButton(e)}>Login</button>}</li>
                    <li className='bg-indigo-500 rounded-2xl py-1 px-4'><NavLink to='/profile' className='focus:outline-none'>{username ? username : "Profile"}</NavLink></li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar