import React,{useState} from 'react'
import { useNavigate,NavLink } from 'react-router-dom'
import Logo from './../images/Keep_Data_logo_white.png'
import { RxCrossCircled } from "react-icons/rx";
import {userSignUp} from './../Utilities/api.js'

function SignupPage() {
    const navigate = useNavigate();
    const defaultSignup = {
        first_name:"",
        last_name:"",
        email:"",
        password: "",
        department:""
    }

    const [newUser,setNewUser]=useState(defaultSignup)

    const valueChange = (e)=>{
        setNewUser({...newUser, [e.target.name]:e.target.value})
    }

    const handleSignupButton = async(e)=>{
        e.preventDefault()
        const response = await userSignUp(newUser)
        if(response){
            console.log(response)
            if(response.status === 201)
                {
                    navigate('/signupSuccess')
                }
        else console.log("There is an error")
    }
}
    return (
        <div className='fixed left-0 top-0 w-full h-screen bg-gray-500/70 z-20 flex flex-col items-center justify-center bg-transparent'>

            <div className='bg-slate-700 w-1/2 rounded-2xl flex flex-col flex-row-reverse items-center justify-between'>

                <div className='flex w-full items-center justify-center gap-6 bg-indigo-500 px-12 py-3 rounded-t-2xl'>
                    <img className='w-16 opacity-60 mb-2' src={Logo} />
                    <div className='flex flex-col items-center'>
                        <h2 className='text-3xl text-slate-300 font-bold'>KEEP DATA</h2>
                        <p className='italic text-slate-300 text-sm'>...all at one place</p>
                    </div>
                    
                </div>

                <div className='flex-1 flex flex-col w-3/4 items-center p-6 gap-6'>
                    <h2 className='text-indigo-500 text-2xl font-bold text-left w-full'>Sign Up</h2>
                        <form className='flex flex-col gap-3 text-base text-white w-full'>
                            <div className='w-full flex gap-2 mx-auto'>
                                <input type='text' name='first_name' className='p-2 rounded-md bg-slate-800 flex-1 focus:outline-none focus:shadow-xl' placeholder='First name' onChange={e=>valueChange(e)}></input>
                                <input type='text' name='last_name' className='p-2 rounded-md bg-slate-800 flex-1 focus:outline-none focus:shadow-xl' placeholder='Last name' onChange={e=>valueChange(e)}></input>
                            </div>
                            <div className='flex flex-col gap-2 w-full mx-auto'>
                            <input type='text' name='email' className='p-2 rounded-md bg-slate-800 focus:outline-none focus:shadow-xl' placeholder='Email' onChange={e=>valueChange(e)}></input>
                            </div>
                            <div className=' w-full flex gap-6'>
                            <div className='flex-1 flex flex-col gap-2 mx-auto'>
                                <input type='password' name='password' className='p-2 rounded-md bg-slate-800 focus:outline-none focus:shadow-xl' placeholder='Password' onChange={e=>valueChange(e)}></input>
                                <input type='password' name='confirm_password' className='p-2 rounded-md bg-slate-800 focus:outline-none focus:shadow-xl' placeholder='Confirm Password'></input>
                            </div>
                            </div>
                            <div className='flex flex-col gap-2 w-full mx-auto'>
                                <input type='password' name='department' className='p-2 rounded-md bg-slate-800 flex-1 focus:outline-none focus:shadow-lg' placeholder='Department' onChange={e=>valueChange(e)}></input>
                            </div>
                        </form>
                <button className='bg-indigo-500 w-24 px-3 py-2 rounded-md text-white' onClick={e=>handleSignupButton(e)}>Sign Up</button>
                </div>
            </div>
        </div>
      )
}

export default SignupPage