import React, { useState } from 'react'
import {uploadDiagram} from './../Utilities/api'

function AddDiag() {

  const [file,setFile] = useState()
  const [description, setDescription] = useState("")

  const submitData =  async (event)=>{
    event.preventDefault()

    const formData = new FormData()
    formData.append("diagram", file)
    formData.append("description", description)

    const result = await uploadDiagram(formData)
    //console.log(result.data)
    }

  return (
    <div className='w-full flex ml-64 mt-20'>
      <div className='form-container flex flex-col gap-4 w-10/12 bg-gradient-to-r from-slate-600 to-slate-700 mx-auto px-10 pt-10 pb-5 mt-6 rounded-xl'>
        <h1 className='text-2xl text-indigo-300'>Upload PDF</h1>
        <form onSubmit={submitData} className='w-full flex flex-col gap-6'>
          <input type="file" filename={file} onChange={e => setFile(e.target.files[0])}
               accept='application/pdf' className="bg-slate-900 block  rounded-lg w-full text-lg text-slate-300 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-slate-800 file:text-slate-300 file:text-base hover:cursor-pointer file:rounded-lg" />
          <input type="text" placeholder='Description' onChange={e => setDescription(e.target.value)}
                className="bg-slate-900 block  rounded-lg w-full text-lg px-3 py-1.5 text-slate-300 focus:outline-none" />
                <button type='submit' className='bg-indigo-500 self-center px-6 py-3 rounded-lg text-lg text-white hover:outline-non'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default AddDiag