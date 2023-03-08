import branchModel from './../Models/AddBranch.js'
import internetConnectionModel from './../Models/internetConnectionModel.js'
import firewallModel from './../Models/FirewallModel.js'
import switchModel from './../Models/SwitchModel.js'
import wlcModel from './../Models/ControllerModel.js'
import apModel from './../Models/AccessPointModel.js'
import ssidModel from './../Models/SsidModel.js'


export const getHomeData = (req,res)=>{
    
}

export const addBranch = async (req,res)=>{
    //console.log("Data received at backend")
    //console.log(req.body)
    try{
        const newBranch = branchModel(req.body)
        await newBranch.save()
        console.log("New branch added Successfully")
        res.status(200).json(newBranch)
    }
    catch(error){
        console.log("Error:",error)
    }
}

export const getBranchDetails = async (req,res)=>{
    try{
        if(req.params.id){
            const id = req.params.id
            const branch = branchModel.findOne({branch_code:id})
            res.status(200).json(branch)
        }
        else{
            const branches = await branchModel.find()
            // console.log("Request received at backend")
            // console.log(branches)
            res.status(200).json(branches)
        }
    }
    catch(error){
        console.log("Error:",error)
    }
}

export const addInternetConnection = async (req,res)=>{
    console.log("Data received at backend")
    console.log(req.body)
    try{
        const newConnection = internetConnectionModel(req.body)
        await newConnection.save()
        console.log("New Connection added Successfully")
        res.status(200).json(newConnection)
    }
    catch(error){
        console.log("Error:",error)
    }
}
export const getInternetDetails = async (req,res)=>{
    console.log("Request for internet details")
    try{
        if(req.params.id){
            const id = req.params.id
            const connection = internetConnectionModel.findOne({branch_code:id})
            res.status(200).json(connection)
        }
        else{
            const connections = await internetConnectionModel.find()
            // console.log("Request received at backend")
            // console.log(connections)
            res.status(200).json(connections)
        }
    }
    catch(error){
        console.log("Error:",error)
    }
}

export const addFirewall = async (req,res)=>{
    console.log("Data received at backend")
    console.log(req.body)
    try{
        const newFirewall = firewallModel(req.body)
        await newFirewall.save()
        console.log("New Firewall added Successfully")
        res.status(200).json(newFirewall)
    }
    catch(error){
        console.log("Error:",error)
    }
}
export const getFirewallDetails = async (req,res)=>{
    console.log("Request for Firewall details")
    try{
        if(req.params.id){
            const id = req.params.id
            const connection = firewallModel.findOne({branch_code:id})
            res.status(200).json(connection)
        }
        else{
            const firewalls = await firewallModel.find()
            // console.log("Request received at backend")
            // console.log(firewalls)
            res.status(200).json(firewalls)
        }
    }
    catch(error){
        console.log("Error:",error)
    }
}

export const addSwitch = async (req,res)=>{
    console.log("Data received at backend")
    console.log(req.body)
    try{
        const newSwitch = switchModel(req.body)
        await newSwitch.save()
        console.log("New Switch added Successfully")
        res.status(200).json(newSwitch)
    }
    catch(error){
        console.log("Error:",error)
    }
}
export const getSwitchDetails = async (req,res)=>{
    console.log("Request for Firewall details")
    try{
        if(req.params.id){
            const id = req.params.id
            const Switch = switchModel.findOne({branch_code:id})
            res.status(200).json(Switch)
        }
        else{
            const switches = await switchModel.find()
            // console.log("Request received at backend")
            // console.log(firewalls)
            res.status(200).json(switches)
        }
    }
    catch(error){
        console.log("Error:",error)
    }
}

export const addWLC = async (req,res)=>{
    console.log("Data received at backend")
    //console.log(req.body)
    try{
        const newWLC = wlcModel(req.body)
        await newWLC.save()
        console.log("New WLC added Successfully")
        res.status(200).json(newWLC)
    }
    catch(error){
        console.log("Error:",error)
    }
}
export const getWLCDetails = async (req,res)=>{
    console.log("Request for Firewall details")
    try{
        if(req.params.id){
            const id = req.params.id
            const controller = wlcModel.findOne({branch_code:id})
            res.status(200).json(controller)
        }
        else{
            const controllers = await wlcModel.find()
            console.log("Request received at backend")
            console.log(controllers)
            res.status(200).json(controllers)
        }
    }
    catch(error){
        console.log("Error:",error)
    }
}

export const addAP = async (req,res)=>{
    console.log("Data received at backend")
    console.log(req.body)
    try{
        const newAP = apModel(req.body)
        await newAP.save()
        console.log("New AP added Successfully")
        res.status(200).json(newAP)
    }
    catch(error){
        console.log("Error:",error)
    }
}
export const getAPDetails = async (req,res)=>{
    console.log("Request for Firewall details")
    try{
        if(req.params.id){
            const id = req.params.id
            const ap = apModel.findOne({branch_code:id})
            res.status(200).json(ap)
        }
        else{
            const aps = await apModel.find()
            console.log("Request received at backend")
            console.log(aps)
            res.status(200).json(aps)
        }
    }
    catch(error){
        console.log("Error:",error)
    }
}

export const addSSID = async (req,res)=>{
    console.log("Data received at backend")
    console.log(req.body)
    try{
        const newSSID = ssidModel(req.body)
        await newSSID.save()
        console.log("New SSID added Successfully")
        res.status(200).json(newSSID)
    }
    catch(error){
        console.log("Error:",error)
    }
}
export const getSSIDDetails = async (req,res)=>{
    console.log("Request for Firewall details")
    try{
        if(req.params.id){
            const id = req.params.id
            const ssid = ssidModel.findOne({branch_code:id})
            res.status(200).json(ssid)
        }
        else{
            const ssids = await ssidModel.find()
            console.log("Request received at backend")
            console.log(getSSIDDetails)
            res.status(200).json(ssids)
        }
    }
    catch(error){
        console.log("Error:",error)
    }
}