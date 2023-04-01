import React,{useContext} from 'react'
import BranchCard from './BranchCard.jsx'
import { useSelector } from 'react-redux';

function Branches() {
 
  const allBranches = useSelector(state => state.dashboardReducer.allBranches)
  //console.log("Branches:",branches)
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