import React, { useContext } from 'react'
import {DataContext} from './../Utilities/DataContextProvider'
import SwitchCard from './SwitchCard'

function ShowSwitches() {
  const {switches} = useContext(DataContext)
  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
      <div className='w-11/12 mx-auto text-white flex gap-6 justify-center flex-wrap'>
        {switches && switches.map(device => {
          return (<SwitchCard device={device} />)
        })}
        
      </div>
    </div>
  )
}

export default ShowSwitches