import React from 'react'
import { NavLink } from 'react-router-dom'

function AddItemCard(props) {
  return (
    <div className='hover:transition-transfor hover:scale-105 hover:duration-200 hover:ease-in-out'>
        <NavLink className='focus:outline-none' to={props.values.nav_link} >
          <div className='w-[280px] bg-gradient-to-r from-slate-600 via-slate-700 to-slate-700 p-6 flex items-center justify-around rounded-xl'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-indigo-300 text-xl font-bold'>{props.values.card_title}</h2>
              <p className='text-slate-400'>{props.values.card_text}</p>
            </div>
            <div className='text-slate-400 text-5xl'>
            {props.children}
            </div>
          </div>
        </NavLink>
    </div>
  )
}

export default AddItemCard