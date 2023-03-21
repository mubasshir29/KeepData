import React,{useEffect, useState} from 'react'
import FormInputField from './FormInputField'
import { useParams } from 'react-router-dom'
import {getBranch,updateBranch} from './../Utilities/api.js'



function EditBranch() {
  const [branch,setBranch] = useState()
  const {id} = useParams()

  // const initialValues = {
  //   name:"",
  //   branch_code: "",
  //   location:"",
  //   contact: ""
  // }
  
  const [updatedBranch, setUpdatedBranch] = useState()
  const gettingBranch = async ()=>{
    const data = await getBranch(id)
    setBranch(data)
    setUpdatedBranch(data)
  }

  useEffect(()=>{
    gettingBranch()
  },[])
  console.log(id)

  const setNewValues = (e)=>{
    setUpdatedBranch({...updatedBranch, [e.target.name]:e.target.value})
  }

  const handleSaveButton = async ()=>{
    const response = await updateBranch(updatedBranch)
    //console.log(updatedBranch)
  }
  
  if(branch){
    return (
      <div className='w-full flex flex-col ml-64 mt-20'>
          <h1 className='text-3xl font-bold mx-auto mt-6 text-indigo-500'>Edit Branch</h1>
          <div className='form-container w-1/2 bg-gradient-to-r from-slate-600 to-slate-700 mx-auto px-10 py-10 mt-6 rounded-xl'>
              <form className='flex flex-col flex-nowrap gap-6 items-stretch'>
                <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                  <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Name</label>
                  <input type='text' name='name' onChange={(e)=>setNewValues(e)} className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900' defaultValue={branch.name} ></input>
                </div>
                <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                  <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Branch Code</label>
                  <input type='text'  name='branch_code' onChange={(e)=>setNewValues(e)} className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900' defaultValue={branch.branch_code} ></input>
                </div>
                <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                  <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Contact</label>
                  <input type='text' name='contact' onChange={(e)=>setNewValues(e)} className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900' defaultValue={branch.contact}></input>
                </div>
                <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                  <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Address</label>
                  <input type='text' name='location' onChange={setNewValues} className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900' defaultValue={branch.location} ></input>
                </div>
                  
              </form>
          </div>
          <button className='bg-indigo-500 flex-grow-0 w-30 mx-auto mt-6 px-12 py-2 rounded-md  text-lg text-white' onClick={handleSaveButton}>Save</button>
      </div>
    )
  }
}

export default EditBranch