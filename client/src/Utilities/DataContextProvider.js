import React,{createContext,useEffect,useState} from 'react'
//import Firewalls from '../Firewalls/Firewalls.jsx'
import { getAllBranches, getAllInternetDetails, getAllFirewallDetails,getAllWlcDetails,getAllSwitchDetails, getAllAPDetails, getAllSSIDDetails,checkLoginStatus } from './api.js'

const DataContext = createContext()

function DataContextProvider(props) {
    const [branches, setBranches] = useState()
    const [connections, setConnections] = useState()
    const [firewalls,setFirewalls] = useState()
    const [wlc, setWlc] = useState(null)
    const [switches, setSwitches] = useState(null)
    const [ssid,setSSID] = useState(null)
    const [ap,setAP] = useState(null)

    const [isLoggedIn, setIsLoggedIn] = useState(null)
    const [username, setUsername] = useState(null)

    const getBranchDetails = async ()=>{
        const result = await getAllBranches()
        //console.log("All branches:",result)
        setBranches(result)
      }
    const getConnectionDetails = async ()=>{
        const result = await getAllInternetDetails()
        // console.log("All Connections:",result)
        setConnections(result)
      }
      const getFirewalls = async ()=>{
        const result = await getAllFirewallDetails()
        //console.log("Firewalls",result)
        setFirewalls(result)
      }
      const getSwitches = async ()=>{
        const result = await getAllSwitchDetails()
        //console.log("Switches",result)
        setSwitches(result)
      }

      const getWlc = async ()=>{
        const result = await getAllWlcDetails()
        //console.log("Firewalls",result)
        setWlc(result)
      }
      const getAP = async ()=>{
        const result = await getAllAPDetails()
        //console.log("Firewalls",result)
        setAP(result)
      }
      const getSSID = async ()=>{
        const result = await getAllSSIDDetails()
        //console.log("Firewalls",result)
        setSSID(result)
      }

      const userStatus = async ()=>{
        const status = await checkLoginStatus() //{isLogged: true, user: req.user}
        setIsLoggedIn(status.isLogged)
        setUsername(status.user.user_name)
      }

      const setUserOut = ()=>{
        setIsLoggedIn(false)
        setUsername(null)
      }

      useEffect(()=>{
        getBranchDetails()
        getConnectionDetails()
        getFirewalls()
        getWlc()
        getSwitches()
        getAP()
        getSSID()
        userStatus()
      },[])
  return (
    <DataContext.Provider value={{branches,connections,firewalls,wlc,switches,ssid,ap,isLoggedIn, username,setUserOut}}>
        {props.children}
    </DataContext.Provider>
  )
}

export {DataContext ,DataContextProvider}