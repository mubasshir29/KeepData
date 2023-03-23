import React,{useContext, useEffect, useState} from 'react'
import FormInputField from './FormInputField'
import {DataContext} from '../Utilities/DataContextProvider'
import {getFirewallDetails,updateFirewall} from './../Utilities/api.js'
import {useParams, useNavigate} from 'react-router-dom'

function EditFirewall() {
  const {branches} = useContext(DataContext)
  const [firewall,setFirewall] = useState()
  const [updatedFirewall, setUpdatedFirewall] = useState()
  const navigate = useNavigate()
  console.log("Edit Firewall page")
  const {id} = useParams()
  console.log(id)
  
  
  const gettingFirewallDetails = async ()=>{
    console.log("ID in function", id)
    const data = await getFirewallDetails(id)
    console.log(data)
    setFirewall(data)
    setUpdatedFirewall(data)
  }

  const onValueChange = (e)=>{
    setUpdatedFirewall({...updatedFirewall, [e.target.name]:e.target.value})
  }

  const onSave = async (e)=>{
    e.preventDefault()
    console.log(updatedFirewall)
    const response = await updateFirewall(updatedFirewall)
    console.log("In Edit",response.status)
    if(response.status == 200){
      console.log("Firewall updated Successfully")
      navigate("/firewall")
    }
    else{
      window.alert("There is an error")
    }
  }

  useEffect(()=>{
    console.log("ID in UseEffect", id)
    gettingFirewallDetails()
    console.log("UseEffect")
    
  },[])


  if(firewall){
    return (
      <div className='w-full flex flex-col ml-64 mt-20'>
          <h1 className='text-3xl font-bold mx-auto mt-6 text-indigo-500'>Edit Firewall</h1>
          <div className='form-container w-1/2 bg-gradient-to-r from-slate-600 to-slate-700 mx-auto px-10 py-10 mt-6 rounded-xl'>
              <form className='flex flex-col flex-nowrap gap-6 items-stretch'>
                  
              <div className='text-slate-300 flex-1 flex gap-3 bg-slate-900 rounded-lg'>
                      <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Branch</label>
                      <select onChange={e => onValueChange(e)} className='flex-1 bg-slate-900  rounded-md py-1 px-2 text-lg focus:outline-none' defaultValue={firewall.branch} >
                        <option className='w-full'>--Select Branch--</option>
                        {branches && branches.map(branch => <option value={branch.branch_code} >{branch.name}</option>)}
                      </select>
                    </div>
                    <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                      <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Name</label>
                      <input type='text' name='name' onChange={e => onValueChange(e)}  className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900' defaultValue={firewall.name} ></input>
                    </div>
                    <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                      <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Model</label>
                      <input type='text' name='model' onChange={e => onValueChange(e)}  className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900' defaultValue={firewall.model}></input>
                    </div>
                    <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                      <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Serial No</label>
                      <input type='text' name='serial' onChange={e => onValueChange(e)}  className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900' defaultValue={firewall.serial}></input>
                    </div>
                    <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                      <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Management IP</label>
                      <input type='text' name='management_ip' onChange={e => onValueChange(e)}  className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900' defaultValue={firewall.management_ip}></input>
                    </div>
                    <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                      <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Software</label>
                      <input type='text' name='software' onChange={e => onValueChange(e)}  className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900' defaultValue={firewall.software}></input>
                    </div>
                    <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                      <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Support</label>
                      <input type='text' name='support' onChange={e => onValueChange(e)}  className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900' defaultValue={firewall.support}></input>
                    </div>
              </form>
          </div>
          <button onClick={onSave} className='bg-indigo-500 flex-grow-0 w-30 mx-auto mt-6 px-12 py-2 rounded-md  text-lg text-white'>Save</button>
      </div>
    )
  }
}

export default EditFirewall