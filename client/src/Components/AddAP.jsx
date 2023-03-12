import React,{useContext, useState} from 'react'
import FormInputField from './FormInputField'
import {DataContext} from './../Utilities/DataContextProvider'

function AddAP() {
  const {branches,wlc} = useContext(DataContext)
  const [selectedBranch, setSelectedBranch] = useState()
  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
        <h1 className='text-3xl font-bold mx-auto mt-6 text-indigo-500'>Add Controller</h1>
        <div className='form-container w-1/2 bg-gradient-to-r from-slate-600 to-slate-700 mx-auto px-10 py-10 mt-6 rounded-xl'>
            <form className='flex flex-col flex-nowrap gap-6 items-stretch'>
              
                  <div className='text-slate-300 flex-1 flex gap-3'>
                    <label className='text-lg'>Branch</label>
                    <select onChange={e=>console.log(e.value)} className='bg-slate-900 flex-1  rounded-md py-1 px-2 text-lg focus:outline-none'>
                      <option className='w-full text-center'>--Select Branch--</option>
                      {branches && branches.map(branch => <option value={branch.branch_code}>{branch.name}</option>)}
                    </select>
                  </div>
                  <div className='text-slate-300 flex-1 flex gap-3'>
                    <label className='text-lg'>Controller</label>
                    <select className='bg-slate-900 flex-1  rounded-md py-1 px-2 text-lg focus:outline-none'>
                      <option className='w-full text-center'>--Select Controller--</option>
                      {wlc && wlc.map(controller => <option>{controller.name}</option>)}
                    </select>
                  </div>
                <FormInputField values={{label_text:"Name"}} />
                <FormInputField values={{label_text:"Model"}} />
                <FormInputField values={{label_text:"Serial No"}} />
                <FormInputField values={{label_text:"Management IP"}} />
                <FormInputField values={{label_text:"MAC Address"}} />
                <FormInputField values={{label_text:"Description"}} />
                
            </form>
        </div>
        <button className='bg-indigo-500 flex-grow-0 w-20 mx-auto mt-6 px-6 py-2 rounded-md  text-lg text-white'>Save</button>
    </div>
  )
}

export default AddAP