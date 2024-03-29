import React,{useState} from 'react'
import FormInputField from './FormInputField'
import { NavLink } from 'react-router-dom';
import {addBranch} from './../Utilities/api'
import { useNavigate } from 'react-router-dom';

function AddBranch() {
  const navigate = useNavigate()
  const initialValues = {
    name:"",
    branch_code: "",
    location:"",
	  contact: ""
  }
  const [branch,setBranch] = useState(initialValues)

  const setBranchValue = (event)=>{
    setBranch({...branch, [event.target.name]:event.target.value})
    console.log(branch)
  }
  const saveBranch = async (e)=>{
    e.preventDefault()
    const response = await addBranch(branch)
    if(response){
      if(response.status === 200){
        navigate('/settings')
      }
    }
  }
  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
        <h1 className='text-3xl font-bold mx-auto mt-6 text-indigo-500'>Add Branch</h1>
        <div className='form-container w-1/2 bg-gradient-to-r from-slate-600 to-slate-700 mx-auto px-10 py-10 mt-6 rounded-xl'>
            <form className='flex flex-col flex-nowrap gap-6 items-stretch'>
            <span className='text-indigo-500 underline'><NavLink to='/import/branch'>Import file --&gt;</NavLink></span>
              <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Name</label>
                <input type='text' name='name' onChange={e => setBranchValue(e) } className='flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900'></input>
              </div>
              <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Branch Code</label>
                <input type='text' name='branch_code' onChange={e => setBranchValue(e) } className='flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900'></input>
              </div>
              <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Contact</label>
                <input type='text' name='contact' onChange={e => setBranchValue(e) } className='flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900' ></input>
              </div>
              <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Address</label>
                <input type='text' name='location' onChange={e => setBranchValue(e) } className='flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900'></input>
              </div>
            </form>
        </div>
        <button onClick={e => saveBranch(e)} className='bg-indigo-500 flex-grow-0 w-30 mx-auto mt-6 px-12 py-2 rounded-md  text-lg text-white'>Save</button>
    </div>
  )
}

export default AddBranch