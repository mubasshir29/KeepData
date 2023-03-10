import logo from './logo.svg';
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

function App() {
  return (
    <div className='min-w-full min-h-screen bg-slate-900'>
      <Navbar/>
      <main className='flex'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='branches' element={<Branches/>} />
          <Route path='internet' element={<ShowInternet/>} />
          <Route path='firewall' element={<ShowFirewalls/>} />
          <Route path='wireless' element={<ShowWirelessControllers/>} />
          <Route path='switches' element={<ShowSwitches/>} />
          <Route path='access-points' element={<ShowAccessPoints/>} />
          <Route path='diagrams' element={<ShowDiagrams/>} />
          <Route path='docs' element={<ShowDocs/>} />
          <Route path='settings' element={<Settings/>} />
          <Route path='settings/add-branch' element={<AddBranch/>} />
          <Route path='settings/add-internet' element={<AddInternet/>} />
          <Route path='settings/add-firewall' element={<AddFirewall/>} />
          <Route path='settings/add-switch' element={<AddSwitch/>} />
          <Route path='settings/add-wlc' element={<AddWLC/>} />
          <Route path='settings/add-ssid' element={<AddSSID/>} />
          <Route path='settings/add-ap' element={<AddAP/>} />
          <Route path='settings/add-diag' element={<AddDiag/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
