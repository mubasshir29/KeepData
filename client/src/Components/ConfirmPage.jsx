import React from 'react'
import { useNavigate } from 'react-router-dom'

function ConfirmPage({getConfirm}) {
    const navigate = useNavigate()

    const handleYesButton = (e)=>{
        getConfirm("yes")
    }


  return (
    <div className='fixed left-0 top-0 w-full h-screen bg-gray-700/70 z-20 flex flex-col items-center justify-center bg-transparent'>
        
        <div className='bg-slate-800 w-1/2 rounded-2xl flex flex-col gap-6'>
            <h1>Are you sure you want to delete?</h1>
            <div className='button-container flex gap-12'>
                <button onClick={() => navigate(-1)}>Cancel</button>
                <button onClick={e => handleYesButton(e)}>Yes</button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmPage