import React,{useContext, useState} from 'react'
import FormInputField from './FormInputField'
import {DataContext} from './../Utilities/DataContextProvider'
import { NavLink, useNavigate } from 'react-router-dom';
import Papa from 'papaparse'
import importSwitchFile from './../DownloadableFiles/import_Switches.csv'
import {addSwitch} from './../Utilities/api.js'

function AddSwitch() {
  const navigate = useNavigate()
  const {branches} = useContext(DataContext)
  const [importButton, setImportButton] = useState(false)
  const [importedFile, setImportedFile] = useState()
  const [data,setData] = useState()

  const initialValues = {
    branch:"",
    switch_name:"",
    ip_address:"",
    model:"",
    serial_no:"",
    software:"",
    support:""
  }

  const [newSwitch,setNewSwitch] = useState(initialValues)

  const setValues = (e)=>{
    setNewSwitch({...newSwitch, [e.target.name]:e.target.value})
  }

  const onSave = async (e)=>{
    e.preventDefault()
    console.log("Save button clicked")
    console.log("Import button", importButton)
    if(importButton){
      Papa.parse(importedFile, {
        header: true,
        skipEmptyLines: true,
        complete: (results)=>{
          setData(results.data)
        }
      })
      if(data){
        console.log("Imported Data",data)
        data.forEach(async nswitch => {
          console.log(nswitch)
          const response = await addSwitch(nswitch)
          console.log(response)
            if(response.status == 200){
              console.log("Switch added successfully")
              return;
            }
            else console.log("Error occured")
          
        })
        navigate('/settings')
      }
    }
   else{
    const response = await addSwitch(newSwitch)
    console.log(response)
    if(response.status == 200){
      console.log("AP added successfully")
      navigate('/settings')
    }
   }
  }

  const importClick = (e)=>{
    setImportButton(!importButton)
  }

  return (
    <div className='w-full flex flex-col ml-64 mt-20 px-20'>
        <h1 className='text-3xl font-bold mx-auto mt-6 text-indigo-500'>Add Switch</h1>
        <div className='form-container w-full flex flex-col bg-gradient-to-r from-slate-600 to-slate-700 mx-auto px-10 py-10 mt-6 rounded-xl'>
        <button onClick={(e)=>importClick(e)} className=' w-32 self-end bg-slate-800 text-slate-400 px-4 py-1 rounded-full float-right mb-1'>{importButton?"Add Item":"Import CSV"}</button>
        {importButton ? 
          
          <form class="flex flex-col gap-3">
            <a className='text-indigo-500 cursor-pointer' href={importSwitchFile} download='import_Switches'>Download template</a>
            <label class="block w-full">
              <input type="file" onChange={e => setImportedFile(e.target.files[0])}
                className="bg-slate-900 block  rounded-lg w-full text-sm text-slate-300 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-slate-800 file:text-slate-300 file:text-base hover:cursor-pointer file:rounded-lg" />
            </label>
            <div className='mt-10 text-white '>
              <p className='italic'>Note:</p>
              <p className='text-xs opacity-70 mt-2'>Select Branch:<span className='ml-2 italic'> AVR, MINA, AAN, IS-KHI, IS-ISB, MMF  </span></p>
            </div>
          </form>
              //IF condition fails below form will be endered
            :<form className='flex flex-col flex-nowrap gap-6 items-stretch mt-3'>
                <div className='text-slate-300 flex-1 flex gap-3 bg-slate-900 rounded-lg'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Branch</label>
                    <select name='branch' onChange={e => setValues(e)} className=' flex-1 bg-slate-900  rounded-md py-1 px-2 text-lg focus:outline-none'>
                      <option className='w-full text-center'>--Select Branch--</option>
                      {branches && branches.map(branch => <option value={branch.branch_code}>{branch.name}</option>)}
                    </select>
                  </div>
                  <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Name</label>
                    <input type='text' name='switch_name' onChange={e => setValues(e)} className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900'></input>
                  </div>
                  <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Model</label>
                    <input type='text' name='model' onChange={e => setValues(e)} className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900'></input>
                  </div>  
                  <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Serial No</label>
                    <input type='text' name='serial_no' onChange={e => setValues(e)} className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900'></input>
                  </div>  
                  <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Management IP</label>
                    <input type='text' name='ip_address' onChange={e => setValues(e)} className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900'></input>
                  </div>  
                  <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Software</label>
                    <input type='text' name='software' onChange={e => setValues(e)} className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900'></input>
                  </div>  
                  <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Support</label>
                    <input type='text' name='support' onChange={e => setValues(e)} className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900'></input>
                  </div>  
            </form>}
        </div>
        <button onClick={e=> onSave(e)} className='bg-indigo-500 flex-grow-0 w-30 mx-auto mt-6 px-12 py-2 rounded-md  text-lg text-white'>Save</button>
    </div>
  )
}

export default AddSwitch