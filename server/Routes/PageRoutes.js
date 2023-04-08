import express from 'express'
import {getHomeData, addBranch,getBranchDetails,addInternetConnection,getInternetDetails,getFirewallDetails,addFirewall,getSwitchDetails,addSwitch,addWLC,getWLCDetails,addAP,getAPDetails,addSSID,getSSIDDetails,signupHandler,loginHandler,checkAuthentication,updateBranch,updateInternetConnection,updateFirewall,updateSwitch,updateWLC,updateAP,updateSSID,deleteBranch,deleteInternetConnection,deleteFirewall,deleteSwitch,deleteWLC,deleteAP,deleteSSID,saveDiagram} from './../Controllers/pageController.js'
const pageRouter = express.Router()
import verifyToken from './../Middleware/verifyToken.js'

pageRouter.get('/',getHomeData)
//Branch Routes
pageRouter.get('/branch',getBranchDetails)
pageRouter.get('/branch/:id',getBranchDetails)
pageRouter.post('/new/branch',addBranch)
pageRouter.post('/edit/branch',updateBranch)
pageRouter.delete('/delete/branch/:id',deleteBranch)


//Internet Routes
pageRouter.get('/internet',getInternetDetails)
pageRouter.get('/internet/:id',getInternetDetails)
pageRouter.post('/new/internet',addInternetConnection)
pageRouter.post('/edit/internet',updateInternetConnection)
pageRouter.delete('/delete/internet/:id',deleteInternetConnection)

//Firewall Routes
pageRouter.get('/firewall',getFirewallDetails)
pageRouter.get('/firewall/:id',getFirewallDetails)
pageRouter.post('/new/firewall',addFirewall)
pageRouter.post('/edit/firewall',updateFirewall)
pageRouter.delete('/delete/firewall/:id',deleteFirewall)


//Switch Routes
pageRouter.get('/switch',getSwitchDetails)
pageRouter.get('/switch/:id',getSwitchDetails)
pageRouter.post('/new/switch',addSwitch)
pageRouter.post('/edit/switch',updateSwitch)
pageRouter.delete('/delete/switch/:id',deleteSwitch)



//WLC Routes
pageRouter.get('/wlc',getWLCDetails)
pageRouter.get('/wlc/:id',getWLCDetails)
pageRouter.post('/new/wlc',addWLC)
pageRouter.post('/edit/wlc',updateWLC)
pageRouter.delete('/delete/wlc/:id',deleteWLC)


//AP Routes
pageRouter.get('/ap',getAPDetails)
pageRouter.get('/ap/:id',getAPDetails)
pageRouter.post('/new/ap',addAP)
pageRouter.post('/edit/ap',updateAP)
pageRouter.delete('/delete/ap/:id',deleteAP)


//SSID Routes
pageRouter.get('/ssid',getSSIDDetails)
pageRouter.get('/ssid/:id',getSSIDDetails)
pageRouter.post('/new/ssid',addSSID)
pageRouter.post('/edit/ssid',updateSSID)
pageRouter.delete('/delete/ssid/:id',deleteSSID)


//Auth Routes
pageRouter.post('/login',loginHandler)
pageRouter.post('/signUp',signupHandler)
pageRouter.get('/isAuthenticated', verifyToken, checkAuthentication)

//Diagrams
pageRouter.post('/diag/upload', saveDiagram)

export default pageRouter;