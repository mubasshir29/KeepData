import React,{useContext} from 'react'
import {DataContext} from './../Utilities/DataContextProvider'
import InternetCard from './InternetCard'

function ShowInternet() {
  const {connections} = useContext(DataContext)
  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
      <div className='w-11/12 mx-auto text-white flex gap-6 justify-center flex-wrap'>
        {connections && connections.map(internet => {
          return (<InternetCard internet={internet} />)
        })}
        
      </div>
    </div>
  )
}

export default ShowInternet