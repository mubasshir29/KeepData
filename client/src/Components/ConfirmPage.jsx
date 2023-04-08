import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {delAPData,delBranchData,delInternetData,delFirewallData,delSwitchData,delWlcData,delSsidData} from './../Redux/dataSlice.js'


function ConfirmPage(props) {
    const navigate = useNavigate()
    const {deleteID , deleteCategory} = props;
    const dispatch = useDispatch()
    console.log("Category" , deleteCategory)

    const deleteItem = (e)=>{
        if(e.target.name === 'yes'){
            handleDelete()
            
        }
        else {
            props.setShowDialog(false)
            }
    }

    const handleDelete = async ()=>{
        console.log(deleteID)
        switch(deleteCategory){
            case "branch" : {
                console.log("Deleting Branch")
                dispatch(delBranchData(deleteID))
                navigate('/branches')
                break;
            }
            case "internet" : {
                console.log("Deleting Internet")
                dispatch(delInternetData(deleteID))
                navigate('/internet')
                break;
            }
            case "firewall" : {
                console.log("Deleting Firewall")
                dispatch(delFirewallData(deleteID))
                navigate('/firewall')
                break;
            }
            case "nswitch" : {
                console.log("Deleting Switch")
                dispatch(delSwitchData(deleteID))
                navigate('/switches')
                break;
            }
            case "wlc" : {
                console.log("Deleting Wireless Controller")
                dispatch(delWlcData(deleteID))
                navigate('/wireless')
                break;
            }
            case "ssid" : {
                console.log("Deleting SSID")
                dispatch(delSsidData(deleteID))
                navigate('/ssid')
                break;
            }
            case "ap" : {
                console.log("Deleting AP")
                dispatch(delAPData(deleteID))
                navigate('/access-points')
                break;
            }
        }
        props.setShowDialog(false)
      }

  return (
    <div className='fixed left-0 top-0 w-full h-screen bg-slate-800/80 z-20 flex flex-col items-center justify-center bg-transparent' onClick={()=>{props.setShowDialog(false)}}>
        
        <div className='bg-slate-700 mx-auto w-96 rounded-2xl flex flex-col gap-6 p-8 items-center text-xl'>
            <h1 className=' text-center'>Are you sure you want to delete?</h1>
            <div className='button-container flex gap-6'>
                <button className='bg-red-400/80 p-3 w-24 rounded-xl' name='no' onClick={e => deleteItem(e)}>Cancel</button>
                <button className='bg-emerald-500 p-3 w-24 rounded-xl' name='yes' onClick={e => deleteItem(e)}>Yes</button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmPage