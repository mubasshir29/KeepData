import React from 'react'

function FormInputField({values}) {
  return (
    <div className='text-slate-300 flex p-0 gap-3 rounded-lg items-center bg-slate-900'>
        <label className='text-lg rounded-l-lg bg-slate-800 m-0 py-2 px-4'>{values.label_text}</label>
        <input type='text' className=' flex-1 py-1 px-2 text-lg m-0 focus:outline-none bg-slate-900'></input>
    </div>
  )
}

export default FormInputField