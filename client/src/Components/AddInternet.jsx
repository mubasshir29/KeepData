import React,{useContext} from 'react'
import FormInputField from './FormInputField'
import {DataContext} from './../Utilities/DataContextProvider'

function AddInternet() {
  const {branches} = useContext(DataContext)
  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
        <h1 className='text-3xl font-bold mx-auto mt-6 text-indigo-500'>Add Internet</h1>
        <div className='form-container w-1/2 bg-gradient-to-r from-slate-600 to-slate-700 mx-auto px-10 py-10 mt-6 rounded-xl'>
            <form className='flex flex-col flex-nowrap gap-6 items-stretch'>
                
                <div className='text-slate-300 flex-1 flex gap-3 bg-slate-900 rounded-lg'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Branch</label>
                    <select className='flex-1 bg-slate-900  rounded-md py-1 px-2 text-lg focus:outline-none'>
                      <option className='w-full text-center'>--Select Branch--</option>
                      {branches && branches.map(branch => <option>{branch.name}</option>)}
                    </select>
                  </div>
                <div className='text-slate-300 flex-1 flex gap-3 bg-slate-900 rounded-lg'>
                  <div className='flex-1 flex gap-3'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>ISP</label>
                    <select className='flex-1 bg-slate-900  rounded-md py-1 px-2 text-lg focus:outline-none'>
                      <option className='w-full text-center'>--Select Provider--</option>
                      <option>Etisalat</option>
                      <option>Du</option>
                    </select>
                  </div>
                  <div className='text-slate-300 flex-1 flex gap-3 bg-slate-900 rounded-lg'>
                    <label className='text-lg bg-slate-800 m-0 py-2 px-4'>Type</label>
                    <select className='flex-1 bg-slate-900  rounded-md py-1 px-2 text-lg focus:outline-none'>
                      <option className='hover:bg-indigo-500'>--select type--</option>
                      <option className='hover:bg-indigo-500'>Leased</option>
                      <option className='hover:bg-indigo-500'>Shared</option>
                    </select>
                  </div>
                </div>
                <FormInputField values={{label_text:"Account No"}} />
                <FormInputField values={{label_text:"Account Holder"}} />
                <FormInputField values={{label_text:"Bandwidth"}} />
                <FormInputField values={{label_text:"Support"}} />
                <FormInputField values={{label_text:"Comments"}} />
            </form>
        </div>
        <button className='bg-indigo-500 flex-grow-0 w-30 mx-auto mt-6 px-12 py-2 rounded-md  text-lg text-white'>Save</button>
    </div>
  )
}

export default AddInternet