import React,{useContext, useState} from 'react'
import FormInputField from './FormInputField'
import {DataContext} from './../Utilities/DataContextProvider'
import {addAP} from './../Utilities/api'
import { NavLink, useNavigate } from 'react-router-dom'
import Papa from 'papaparse'
import importAPFile from './../DownloadableFiles/import_APs.csv'

function AddAP() {
  const {branches,wlc} = useContext(DataContext)
  const [selectedBranch, setSelectedBranch] = useState()
  const [importButton, setImportButton] = useState(false)
  const [importedFile, setImportedFile] = useState()
  const navigate = useNavigate()

  const initialValues = {
    branch: "",
    controller: "",
    name: "",
    model: "",
    serial: "",
    management_ip: "",
    mac_address: "",
    description: ""
  }
  const [ap,setAP] = useState(initialValues)
  const [newAP, setNewAP] = useState(initialValues)

  const setValues = (e)=>{
    setAP({...ap, [e.target.name]:e.target.value})
  }

  const convertData = (importedAPs)=>{
    console.log(importedAPs)
    const newData = []

    importedAPs.forEach(ap => {
      console.log("AP in loop", ap)
      setNewAP({...newAP, branch : ap.Branch,
        controller : ap.Controller,
        name : ap.Name,
        model : ap.Model,
        serial : ap.Serial,
        management_ip : ap.IP_Address,
        mac_address : ap.MAC_address,
        description : ap.Description})
        console.log(newAP)
      newData.push(newAP)
    })
    console.log("NEw AP",newData)
    newData.forEach(async ap => {
      const response = await addAP(ap)
      console.log(response)
        if(response.status == 200){
          console.log("AP added successfully")
          return;
        }
        else console.log("Error occured")
    })
  }

  const onSave = async (e)=>{
    e.preventDefault()
    if(importButton){
      Papa.parse(importedFile, {
        header: true,
        skipEmptyLines: true,
        complete: (results)=>{
          convertData(results.data)
        }
      })
    }
   else{
    const response = await addAP(ap)
    console.log(response)
    if(response.status == 200){
      console.log("AP added successfully")
      navigate('/settings')
    }
   }
  }

  const handleImportSubmit = (e)=>{
    //console.log(e.target.files[0])
    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: (results)=>{
        console.log(results.data)
      }
    })
  }

  const importClick = (e)=>{
    setImportButton(!importButton)
  }
  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
        <h1 className='text-3xl font-bold mx-auto mt-6 text-indigo-500'>Add AP</h1>
        <div className='relative flex flex-col form-container w-1/2 bg-gradient-to-r from-slate-600 to-slate-700 mx-auto px-10 pt-5 pb-10 mt-6 rounded-xl'>
          <button onClick={(e)=>importClick(e)} className=' w-32 self-end bg-slate-800 text-slate-400 px-4 py-1 rounded-full float-right mb-3'>{importButton?"Add Item":"Import CSV"}</button>
          
          {/* Conditional rendering happening here */}

          {importButton ? 
          
          <form class="flex flex-col gap-3">
            <a className='text-indigo-500 cursor-pointer' href={importAPFile} download='import_APS'>Download template</a>
            <label class="block w-full">
              <input type="file" onChange={e => setImportedFile(e.target.files[0])}
                className="bg-slate-900 block p-3  rounded-lg w-full text-sm text-slate-300 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-slate-800 file:text-slate-300 file:text-base hover:cursor-pointer file:rounded-lg" />
            </label>
          </form>
              //IF condition fails below form will be endered
            :<form id='add-ap-form' className='clear-right flex flex-col flex-nowrap gap-6 items-stretch mt-3'>
            <div className='text-slate-300 flex-1 flex gap-3 bg-slate-900 rounded-lg'>
              <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Branch</label>
              <select name='branch' onChange={e=>setValues(e)} className='flex-1 bg-slate-900  rounded-md py-1 px-2 text-lg focus:outline-none'>
                <option className='w-full '>--Select Branch--</option>
                  {branches && branches.map(branch => <option value={branch.branch_code}>{branch.name}</option>)}
              </select>
            </div>
                  <div className='text-slate-300 flex-1 flex gap-3 bg-slate-900 rounded-lg'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Controller</label>
                    <select name='controller' onChange={e=>setValues(e)} className='flex-1 bg-slate-900  rounded-md py-1 px-2 text-lg focus:outline-none'>
                      <option className='w-full'>--Select Controller--</option>
                      {wlc && wlc.map(controller => <option value={controller.name}>{controller.name}</option>)}
                    </select>
                  </div>
                  <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Name</label>
                    <input name='name' type='text' onChange={e=>setValues(e)} className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900' ></input>
                  </div>
                  <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Model</label>
                    <input name='model' type='text' onChange={e=>setValues(e)} className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900'></input>
                  </div>
                  <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Serial No</label>
                    <input name='serial' type='text' onChange={e=>setValues(e)} className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900'></input>
                  </div>
                  <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Management IP</label>
                    <input name='management_ip' onChange={e=>setValues(e)} type='text' className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900'></input>
                  </div>
                  <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>MAC Address</label>
                    <input name='mac_address' type='text' onChange={e=>setValues(e)} className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900'></input>
                  </div>
                  <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Description</label>
                    <input name='description' type='text' onChange={e=>setValues(e)} className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900'></input>
                  </div>
                  
            </form>}
        </div>
        <button type='submit' form='add-ap-form' onClick={onSave} className='bg-indigo-500 flex-grow-0 w-30 mx-auto mt-6 px-12 py-2 rounded-md  text-lg text-white'>Save</button>
    </div>
  )
}

export default AddAP