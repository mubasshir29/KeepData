import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import {DataContext} from './../Utilities/DataContextProvider'

function ImportCSV() {
    const {option} = useParams()
    const {branches,wlc} = useContext(DataContext)
    console.log(option)

    const handleImport = (e)=>{
        
    }

    const setValues = (e)=>{

    }
    const onSave = (e)=>{

    }
    return (
      <div className='w-full flex flex-col ml-64 mt-20'>
          <h1 className='text-3xl font-bold mx-auto mt-6 text-indigo-500'>Import CSV</h1>
          <div className='form-container w-4/5 bg-gradient-to-r from-slate-600 to-slate-700 mx-auto px-10 py-10 mt-6 rounded-xl'>
              
              <form id='add-ap-form' className='flex flex flex-wrap gap-6'>
              
                    <div className='text-slate-300 w-5/12 flex flex-col py-2 gap-1 rounded-lg items-left  bg-slate-900'>
                      <label className='text-2xl rounded-l-lg m-0  px-4'>InternetAccounts</label>
                      <input type='file' name='name' onChange={e=>setValues(e)} className=' flex-1 py-1 px-4 text-lg m-0 focus:outline-none' ></input>
                    </div>
                    <div className='text-slate-300 w-5/12 flex flex-col py-2 gap-1 rounded-lg items-left  bg-slate-900'>
                      <label className='text-2xl rounded-l-lg m-0  px-4'>Firewalls</label>
                      <input type='file' name='name' onChange={e=>setValues(e)} className=' flex-1 py-1 px-4 text-lg m-0 focus:outline-none' ></input>
                    </div>
                    <div className='text-slate-300 w-5/12 flex flex-col py-2 gap-1 rounded-lg items-left  bg-slate-900'>
                      <label className='text-2xl rounded-l-lg m-0  px-4'>Switches</label>
                      <input type='file' name='name' onChange={e=>setValues(e)} className=' flex-1 py-1 px-4 text-lg m-0 focus:outline-none' ></input>
                    </div>
                    <div className='text-slate-300 flex w-5/12 flex-col py-2 gap-1 rounded-lg items-left  bg-slate-900'>
                      <label className='text-2xl rounded-l-lg m-0  px-4'>Wireless Controllers</label>
                      <input type='file' name='name' onChange={e=>setValues(e)} className=' flex-1 py-1 px-4 text-lg m-0 focus:outline-none' ></input>
                    </div>
                    <div className='text-slate-300 w-5/12 flex flex-col py-2 gap-1 rounded-lg items-left  bg-slate-900'>
                      <label className='text-2xl rounded-l-lg m-0  px-4'>SSIDs</label>
                      <input type='file' name='name' onChange={e=>setValues(e)} className=' flex-1 py-1 px-4 text-lg m-0 focus:outline-none' ></input>
                    </div>
                    <div className='text-slate-300 w-5/12 flex flex-col py-2 gap-1 rounded-lg items-left  bg-slate-900'>
                      <label className='text-2xl rounded-l-lg m-0  px-4'>Access Points</label>
                      <input type='file' name='name' onChange={e=>setValues(e)} className=' flex-1 py-1 px-4 text-lg m-0 focus:outline-none' ></input>
                    </div>                    
              </form>
          </div>
          <button type='submit' form='add-ap-form' onClick={onSave} className='bg-indigo-500 flex-grow-0 w-30 mx-auto mt-6 px-12 py-2 rounded-md  text-lg text-white'>Save</button>
      </div>
    )
}

export default ImportCSV