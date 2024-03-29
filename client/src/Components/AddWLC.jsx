import React,{useContext} from 'react'
import FormInputField from './FormInputField'
import {DataContext} from './../Utilities/DataContextProvider'
import { NavLink } from 'react-router-dom';

function AddWLC() {
  const {branches} = useContext(DataContext)
  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
        <h1 className='text-3xl font-bold mx-auto mt-6 text-indigo-500'>Add Controller</h1>
        <div className='form-container w-1/2 bg-gradient-to-r from-slate-600 to-slate-700 mx-auto px-10 py-10 mt-6 rounded-xl'>
            <form className='flex flex-col flex-nowrap gap-6 items-stretch'>
            <NavLink to='/import/wlc'><span className='text-indigo-500 underline'>Import file --&gt;</span></NavLink>
                <div className='text-slate-300 flex-1 flex gap-3 bg-slate-900 rounded-lg'>
                    <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>Branch</label>
                    <select className=' flex-1 bg-slate-900  rounded-md py-1 px-2 text-lg focus:outline-none'>
                      <option className='w-full text-center'>--Select Branch--</option>
                      {branches && branches.map(branch => <option>{branch.name}</option>)}
                    </select>
                  </div>
                <FormInputField values={{label_text:"Name"}} />
                <FormInputField values={{label_text:"Model"}} />
                <FormInputField values={{label_text:"Serial No"}} />
                <FormInputField values={{label_text:"Management IP"}} />
                <FormInputField values={{label_text:"Software"}} />
                <FormInputField values={{label_text:"Support"}} />
                
            </form>
        </div>
        <button className='bg-indigo-500 flex-grow-0 w-30 mx-auto mt-6 px-12 py-2 rounded-md  text-lg text-white'>Save</button>
    </div>
  )
}

export default AddWLC