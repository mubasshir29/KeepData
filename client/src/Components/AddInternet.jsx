import React,{useContext, useState, useEffect} from 'react'
import FormInputField from './FormInputField'
import {DataContext} from './../Utilities/DataContextProvider'
import { useNavigate, NavLink } from 'react-router-dom'
import {addInternetConnection} from './../Utilities/api'

function AddInternet() {
  const {branches} = useContext(DataContext)
  const initialValues = {
    branch: "",
    isp:"",
    type: "",
    account_no: "",
    account_holder: "",
    bandwidth: "",
    support: "",
    comments: ""
  }
  const [connection,setConnection] = useState(initialValues)
  const navigate = useNavigate()
  useEffect(()=>{
    
  },[])

  const setValues = (e)=>{
    setConnection({...connection,[e.target.name]:e.target.value})
  }
  const saveConnection = async (e)=>{
    e.preventDefault()
    //console.log(connection)
    const response = await addInternetConnection(connection)
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
        <h1 className='text-3xl font-bold mx-auto mt-6 text-indigo-500'>Add Internet</h1>
        <div className='form-container w-1/2 bg-gradient-to-r from-slate-600 to-slate-700 mx-auto px-10 py-10 mt-6 rounded-xl'>
            <form className='flex flex-col flex-nowrap gap-6 items-stretch'>
            <NavLink to='/import/internet'><span className='text-indigo-500 underline'>Import file --&gt;</span></NavLink>
                <div className='text-slate-300 flex-1 flex gap-3 bg-slate-900 rounded-lg'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Branch</label>
                    <select name='branch' onChange={e => setValues(e)} className='flex-1 bg-slate-900  rounded-md py-1 px-2 text-lg focus:outline-none'>
                      <option className='w-full text-center'>--Select Branch--</option>
                      {branches && branches.map((branch,index)=> (<option key={index} value={branch.branch_code}>{branch.name}</option>))}
                    </select>
                  </div>
                <div className='text-slate-300 flex-1 flex gap-3 bg-slate-900 rounded-lg'>
                  <div className='flex-1 flex gap-3'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>ISP</label>
                    <select name='isp' onChange={e => setValues(e)} className='flex-1 bg-slate-900  rounded-md py-1 px-2 text-lg focus:outline-none'>
                      <option className='w-full text-center'>--Select Provider--</option>
                      <option>Etisalat</option>
                      <option>Du</option>
                    </select>
                  </div>
                  <div className='text-slate-300 flex-1 flex gap-3 bg-slate-900 rounded-lg'>
                    <label className='text-lg bg-slate-800 m-0 py-2 px-4'>Type</label>
                    <select name='type' onChange={e => setValues(e)} className='flex-1 bg-slate-900  rounded-md py-1 px-2 text-lg focus:outline-none'>
                      <option className='hover:bg-indigo-500'>--select type--</option>
                      <option className='hover:bg-indigo-500'>Leased</option>
                      <option className='hover:bg-indigo-500'>Shared</option>
                    </select>
                  </div>
                </div>
                <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                  <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Account No</label>
                  <input type='text' name='account_no' onChange={e => setValues(e)} className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900'></input>
                </div>
                <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                  <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Account Holder"</label>
                  <input type='text' name='account_holder' onChange={e => setValues(e)} className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900'></input>
                </div>
                <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                  <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Bandwidth</label>
                  <input type='text' name='bandwidth' onChange={e => setValues(e)} className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900'></input>
                </div>
                <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                  <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Support</label>
                  <input type='text' name='support' onChange={e => setValues(e)} className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900'></input>
                </div>
                <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                  <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Comments</label>
                  <input type='text' name='comments' onChange={e => setValues(e)} className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900'></input>
                </div>
            </form>
        </div>
        <button onClick={saveConnection} className='bg-indigo-500 flex-grow-0 w-30 mx-auto mt-6 px-12 py-2 rounded-md  text-lg text-white'>Save</button>
    </div>
  )
}

export default AddInternet