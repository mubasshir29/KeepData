import React from 'react'

function FormInputField({values}) {
  return (
    <div className='text-slate-300 flex gap-3  items-center'>
        <label className='text-lg'>{values.label_text}</label>
        <input type='text' className='bg-slate-900 flex-1  rounded-md py-1 px-2 text-lg focus:outline-none'></input>
    </div>
  )
}

export default FormInputField