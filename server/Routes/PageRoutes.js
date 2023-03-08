import express from 'express'
import {getHomeData, addBranch,getBranchDetails,addInternetConnection,getInternetDetails,getFirewallDetails,addFirewall,getSwitchDetails,addSwitch,addWLC,getWLCDetails,addAP,getAPDetails,addSSID,getSSIDDetails} from './../Controllers/pageController.js'
const pageRouter = express.Router()

pageRouter.get('/',getHomeData)
pageRouter.get('/branch',getBranchDetails)
pageRouter.get('/branch/:id',getBranchDetails)
pageRouter.post('/new/branch',addBranch)

pageRouter.get('/internet',getInternetDetails)
pageRouter.get('/internet/:id',getInternetDetails)
pageRouter.post('/new/internet',addInternetConnection)

pageRouter.get('/firewall',getFirewallDetails)
pageRouter.get('/firewall/:id',getFirewallDetails)
pageRouter.post('/new/firewall',addFirewall)

pageRouter.get('/switch',getSwitchDetails)
pageRouter.get('/switch/:id',getSwitchDetails)
pageRouter.post('/new/switch',addSwitch)

pageRouter.get('/wlc',getWLCDetails)
pageRouter.get('/wlc/:id',getWLCDetails)
pageRouter.post('/new/wlc',addWLC)

pageRouter.get('/ap',getAPDetails)
pageRouter.get('/ap/:id',getAPDetails)
pageRouter.post('/new/ap',addAP)

pageRouter.get('/ssid',getSSIDDetails)
pageRouter.get('/ssid/:id',getSSIDDetails)
pageRouter.post('/new/ssid',addSSID)

export default pageRouter;