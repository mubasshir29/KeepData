import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import ShowInternet from './Components/ShowInternet'
import ShowBranches from './Components/ShowBranches'
import ShowFirewalls from './Components/ShowFirewalls'
import ShowSwitches from './Components/ShowSwitches'
import ShowWirelessControllers from './Components/ShowWirelessControllers'
import ShowAccessPoints from './Components/ShowAccessPoints'
import ShowDiagrams from './Components/ShowDiagrams'
import ShowDocs from './Components/ShowDocs'
import ShowSSID from './Components/ShowSSID';
import Settings from './Components/Settings'
import Branches from './Components/Branches'
import AddBranch from './Components/AddBranch';
import AddInternet from './Components/AddInternet';
import AddFirewall from './Components/AddFirewall';
import AddSwitch from './Components/AddSwitch';
import AddWLC from './Components/AddWLC';
import AddSSID from './Components/AddSSID';
import AddAP from './Components/AddAP';
import AddDiag from './Components/AddDiag';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import SignupSuccess from './Components/SignupSuccess'
import { useEffect } from 'react';
import { checkLoginStatus} from './Utilities/api.js'
import ProtectedRoute from './Components/ProtectedRoute';
import { useSelector, useDispatch } from 'react-redux'
import {setLogin, setLogout} from './Redux/authSlice.js'
import EditBranch from './Components/EditBranch';
import EditInternet from './Components/EditInternet'
import EditFirewall from './Components/EditFirewall';
import EditSwitch from './Components/EditSwitch';
import EditWLC from './Components/EditWLC';
import EditSSID from './Components/EditSSID';
import EditAP from './Components/EditAP';
import ImportCSV from './Components/ImportCSV';
import {getBranchData,getInternetData,getFirewallData,getSwitchData,getWlcData,getSsidData,getAPData} from './Redux/dataSlice'

function App() {
  
  const logged = useSelector((state)=>state.authReducer.loggedStatus)
  const username = useSelector((state)=>state.username)
  const [branches,setBranches] = useState()
  const dispatch = useDispatch()

  const checkLogin = async ()=>{
    const check = await checkLoginStatus()
    //console.log("Login: ",check)
    if(check?.isLogged){
      dispatch(setLogin(checkLogin.user.user_name))
    }
  }

  useEffect(()=>{
    dispatch(getBranchData())
    dispatch(getInternetData())
    dispatch(getFirewallData())
    dispatch(getSwitchData())
    dispatch(getWlcData())
    dispatch(getSsidData())
    dispatch(getAPData())
    checkLogin()

  },[])
  return (
    <div className='min-w-full min-h-screen bg-slate-900'>
      <Navbar/>
      <main className='flex'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/import/:option' element={<ImportCSV/>} />
          <Route path='branches' element={<Branches/>} />
          <Route path='internet' element={<ShowInternet/>} />
          <Route path='firewall' element={<ShowFirewalls/>} />
          <Route path='wireless' element={<ShowWirelessControllers/>} />
          <Route path='ssid' element={<ShowSSID/>} />
          <Route path='switches' element={<ShowSwitches/>} />
          <Route path='access-points' element={<ShowAccessPoints/>} />
          <Route path='diagrams' element={<ShowDiagrams/>} />
          <Route path='docs' element={<ShowDocs/>} />
          <Route exact path='/edit-branch/:id' element={<EditBranch/>} />
          <Route exact path='/edit-internet/:id' element={<EditInternet/>} />
          <Route exact path='/edit-firewall/:id' element={<EditFirewall/>} />
          <Route exact path='/edit-switch/:id' element={<EditSwitch/>} />
          <Route exact path='/edit-wlc/:id' element={<EditWLC/>} />
          <Route exact path='/edit-ssid/:id' element={<EditSSID/>} />
          <Route exact path='/edit-ap/:id' element={<EditAP/>} />
          <Route path='settings' element={<ProtectedRoute logged={logged} ><Settings/></ProtectedRoute>} />
          <Route path='settings/add-branch' element={<AddBranch/>} />
          <Route path='settings/add-internet' element={<AddInternet/>} />
          <Route path='settings/add-firewall' element={<AddFirewall/>} />
          <Route path='settings/add-switch' element={<AddSwitch/>} />
          <Route path='settings/add-wlc' element={<AddWLC/>} />
          <Route path='settings/add-ssid' element={<AddSSID/>} />
          <Route path='settings/add-ap' element={<AddAP/>} />
          <Route path='settings/add-diag' element={<AddDiag/>} />
          
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<SignupPage/>} />
          <Route path='/signupSuccess' element={<SignupSuccess/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
