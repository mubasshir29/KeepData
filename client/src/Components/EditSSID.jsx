import React,{useState, useEffect, useContext} from 'react'
import {getSSIDDetails,updateSSID} from './../Utilities/api.js'
import { useNavigate, useParams } from 'react-router-dom'
import {DataContext} from '../Utilities/DataContextProvider'

function EditSSID() {
  const {id} = useParams()
  const navigate = useNavigate()
  const {branches,wlc} = useContext(DataContext)

  const [ssid,setSSID] = useState()
  const [updatedSSID, setUpdatedSSID] = useState()

  const setValues = (e)=>{
    setUpdatedSSID({...updatedSSID, [e.target.name]:e.target.value})
  }
  const onSave = async (e)=>{
    console.log(updatedSSID)
    const response = await updateSSID(updatedSSID)
    if(response.status === 200){
      console.log("SSID Updated successfully")
      navigate('/ssid')
    }
  }

  const gettingSsidDetails = async ()=>{
    const data = await getSSIDDetails(id)
    console.log(data)
    setSSID(data)
    setUpdatedSSID(data)
  }

  useEffect(()=>{
    console.log("Edit SSID for ",id)
    gettingSsidDetails()
  },[])
  if(ssid){
    return (
      <div className='w-full flex flex-col ml-64 mt-20'>
      <h1 className='text-3xl font-bold mx-auto mt-6 text-indigo-500'>Add Controller</h1>
      <div className='form-container w-1/2 bg-gradient-to-r from-slate-600 to-slate-700 mx-auto px-10 py-10 mt-6 rounded-xl'>
          <form className='flex flex-col flex-nowrap gap-6 items-stretch'>
              
              <div className='text-slate-300 flex-1 flex gap-3 bg-slate-900 rounded-lg'>
                  <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Branch</label>
                  <select name='branch' defaultValue={ssid.branch} onChange={e=>setValues(e)} className=' flex-1 bg-slate-900  rounded-md py-1 px-2 text-lg focus:outline-none'>
                    <option className='w-full'>--Select Branch--</option>
                    {branches && branches.map(branch => <option value={branch.branch_code}>{branch.name}</option>)}
                  </select>
                </div>
                <div className='text-slate-300 flex-1 flex gap-3 bg-slate-900 rounded-lg'>
                      <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Controller</label>
                      <select name='controller'  defaultValue={ssid.controller} onChange={e=>setValues(e)} className='flex-1 bg-slate-900  rounded-md py-1 px-2 text-lg focus:outline-none'>
                        <option className='w-full'>--Select Controller--</option>
                        {wlc && wlc.map(controller => <option>{controller.name}</option>)}
                      </select>
                    </div>
                <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                  <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>SSID</label>
                  <input name='ssid' type='text' defaultValue={ssid.ssid} onChange={e=>setValues(e)}  className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900' ></input>
                </div>
                <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                  <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Password</label>
                  <input name='password' type='text' defaultValue={ssid.password} onChange={e=>setValues(e)} className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900' ></input>
                </div>
                <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                  <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Description</label>
                  <input name='description' type='text' defaultValue={ssid.description} onChange={e=>setValues(e)}  className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900' ></input>
                </div>            
          </form>
      </div>
      <button onClick={onSave} className='bg-indigo-500 flex-grow-0 w-30 mx-auto mt-6 px-12 py-2 rounded-md  text-lg text-white'>Save</button>
  </div>
    )
  }
}

export default EditSSID