import React from 'react'
import FormInputField from './FormInputField'

function AddBranch() {
  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
        <h1 className='text-3xl font-bold mx-auto mt-6 text-indigo-500'>Add Branch</h1>
        <div className='form-container w-1/2 bg-gradient-to-r from-slate-600 to-slate-700 mx-auto px-10 py-10 mt-6 rounded-xl'>
            <form className='flex flex-col flex-nowrap gap-6 items-stretch'>
                
                <FormInputField values={{label_text:"Name"}} />
                <FormInputField values={{label_text:"Branch Code"}} />
                <FormInputField values={{label_text:"Contact"}} />
                <FormInputField values={{label_text:"Address"}} />
            </form>
        </div>
        <button className='bg-indigo-500 flex-grow-0 w-30 mx-auto mt-6 px-12 py-2 rounded-md  text-lg text-white'>Save</button>
    </div>
  )
}

export default AddBranch