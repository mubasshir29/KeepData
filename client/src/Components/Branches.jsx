import React,{useEffect} from 'react'
import BranchCard from './BranchCard.jsx'
import { useSelector, useDispatch } from 'react-redux'
import {getAPData, getBranchData} from './../Redux/dataSlice.js'

function Branches() {
  const dispatch = useDispatch()
  const allBranches = useSelector(state => state.dataReducer.allBranches)
  //console.log("Branches:",branches)

  useEffect(()=>{
    dispatch(getBranchData())
  },[])

  return (
    <div className='w-full flex flex-col ml-64 mt-20'>
      <div className='w-11/12 mx-auto text-white flex gap-6 justify-center flex-wrap' >
          {allBranches && allBranches.map(branch =>{
           return <BranchCard branch={branch}/>
          })}
      </div>
    </div>
  )
}

export default Branches