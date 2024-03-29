import React,{useContext, useState} from 'react'
import FormInputField from './FormInputField'
import {DataContext} from './../Utilities/DataContextProvider'
import { NavLink, useNavigate } from 'react-router-dom'
import {addFirewall} from './../Utilities/api'

function AddFirewall() {
  const {branches} = useContext(DataContext)

  const initialValues = {
    branch: "",
    name:"",
    model:"",
    serial:"" ,
    management_ip:"",
    software:"",
    support: ""
  }
  const [firewall,setFirewall] = useState(initialValues)
  const navigate = useNavigate()

  const setValues = (e)=>{
    setFirewall({...firewall,[e.target.name]:e.target.value})
  }
  const saveConnection = async (e)=>{
    e.preventDefault()
    //console.log(connection)
    const response = await addFirewall(firewall)
    console.log(response.status)
    if(response.status == 200){
      navigate('/settings')
    }
    else{
      window.alert("There is an error")
    }
  }


  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
        <h1 className='text-3xl font-bold mx-auto mt-6 text-indigo-500'>Add Firewall</h1>
        <div className='form-container w-1/2 bg-gradient-to-r from-slate-600 to-slate-700 mx-auto px-10 py-10 mt-6 rounded-xl'>
            <form className='flex flex-col flex-nowrap gap-6 items-stretch'>
            <NavLink to='/import/firewall'><span className='text-indigo-500 underline'>Import file --&gt;</span></NavLink>
            <div className='text-slate-300 flex-1 flex gap-3 bg-slate-900 rounded-lg'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Branch</label>
                    <select name='branch' onChange={e => setValues(e)} className='flex-1 bg-slate-900  rounded-md py-1 px-2 text-lg focus:outline-none'>
                      <option className='w-full'>--Select Branch--</option>
                      {branches && branches.map(branch => <option value={branch.branch_code}>{branch.name}</option>)}
                    </select>
                  </div>
                  <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                    <label  className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Name</label>
                    <input name='name' onChange={e => setValues(e)} type='text' className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900' ></input>
                  </div>
                  <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Model</label>
                    <input name='model' onChange={e => setValues(e)} type='text' className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900' ></input>
                  </div>
                  <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Serial No</label>
                    <input name='serial' onChange={e => setValues(e)} type='text' className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900' ></input>
                  </div>
                  <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Management IP</label>
                    <input name='management_ip' onChange={e => setValues(e)} type='text' className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900' ></input>
                  </div>
                  <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Software</label>
                    <input name='software' onChange={e => setValues(e)} type='text' className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900' ></input>
                  </div>
                  <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Support</label>
                    <input name='support' onChange={e => setValues(e)} type='text' className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900' ></input>
                  </div>
            </form>
        </div>
        <button onClick={e => saveConnection(e)} className='bg-indigo-500 flex-grow-0 w-30 mx-auto mt-6 px-12 py-2 rounded-md  text-lg text-white'>Save</button>
    </div>
  )
}

export default AddFirewall