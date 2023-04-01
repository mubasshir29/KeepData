import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './../images/Keep_Data_logo_white.png'
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import {userLogin} from './../Utilities/api.js'
import { useSelector, useDispatch } from 'react-redux';
import {setLogin, setLogout} from './../Redux/authSlice.js'


function LoginPage() {
    const navigate = useNavigate();
    const logged = useSelector((state)=>state.authReducer.loggedStatus)
    const username = useSelector((state)=>state.authReducer.username)
    const dispatch = useDispatch()

    console.log("Logged:",logged)
    console.log("username:",username)
    const defaultLogin = {
        email:"",
        password: ""
    }

    const [user,setUser]=useState(defaultLogin)

    const valueChange = (e)=>{
        setUser({...user, [e.target.name]:e.target.value})
    }

    const handleLoginButton = async(e)=>{
        e.preventDefault()
        const response = await userLogin(user)
        if(response){
            console.log(response)
            if(response.status === 200)
                {
                    localStorage.setItem("token", response.data.token)
                    dispatch(setLogin(response.data.first_name))
                    navigate(-1)
                }
        else console.log("There is an error")
    }
}
  return (
    <div className='fixed left-0 top-0 w-full h-screen bg-gray-700/70 z-20 flex flex-col items-center justify-center bg-transparent'>
        <div onClick={()=>{navigate(-1)}} className='text-white text-5xl absolute top-20 right-8'><RxCrossCircled/></div>
        <div className='bg-slate-800 w-1/2 rounded-2xl flex flex-row-reverse items-center justify-between'>
            <div className='flex-1 flex flex-col items-center justify-center gap-1/2 bg-indigo-500 h-full px-12 rounded-r-2xl'>
                <img className='w-32 opacity-60 mb-2' src={Logo} />
                <h2 className='text-3xl text-slate-300 font-bold'>KEEP DATA</h2>
                <p className='italic text-slate-300 text-sm'>...all at one place</p>
                <p className='mt-6 text-sm text-slate-300 flex gap-2 items-center'>Don't have an account? <NavLink to='/signup' className=' border-solid border border-slate-300 rounded-full px-2 py-1 '><span className='text-slate-300'>Sign Up</span></NavLink></p>
            </div>
            <div className='flex-1 flex flex-col items-center py-8 px-12 gap-6'>
                <h2 className='text-indigo-500 text-2xl font-bold text-left w-full'>Login</h2>
            <form className='flex flex-col gap-6 text-base text-white w-full'>
                <div className='w-full flex flex-col gap-2 mx-auto'>
                    <label className='text-base text-indigo-500'>Email</label>
                    <input type='text' name='email' className='p-1 rounded-md bg-slate-700 flex-1 focus:outline-none' onChange={e=>valueChange(e)}></input>
                </div>
                <div className='flex flex-col gap-2 w-full mx-auto'>
                    <label className='text-base text-indigo-500'>Password</label>
                    <input type='password' name='password' className='p-1 rounded-md bg-slate-700 flex-1 focus:outline-none' onChange={e=>valueChange(e)}></input>
                </div>
            </form>
            <button className='bg-indigo-500 w-24 px-3 py-2 rounded-md text-white' onClick={e=>handleLoginButton(e)}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default LoginPage