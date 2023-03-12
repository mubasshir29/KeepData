import React,{useContext} from 'react'
import {DataContext} from './../Utilities/DataContextProvider'
import FirewallCard from './FirewallCard'

function ShowFirewalls() {
  const {firewalls} = useContext(DataContext)
  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
      <div className='w-11/12 mx-auto text-white flex gap-6 justify-center flex-wrap'>
        {firewalls && firewalls.map(firewall => {
          return (<FirewallCard firewall={firewall} />)
        })}
      </div>
    </div>
  )
}

export default ShowFirewalls