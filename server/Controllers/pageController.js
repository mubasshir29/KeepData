import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from './../Models/userModel.js'
import branchModel from './../Models/AddBranch.js'
import internetConnectionModel from './../Models/internetConnectionModel.js'
import firewallModel from './../Models/FirewallModel.js'
import switchModel from './../Models/SwitchModel.js'
import wlcModel from './../Models/ControllerModel.js'
import apModel from './../Models/AccessPointModel.js'
import ssidModel from './../Models/SsidModel.js'


export const getHomeData = (req,res)=>{
    
}

//Adding a branch CREATE operation
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

//Getting branch details READ
export const getBranchDetails = async (req,res)=>{
    try{
        if(req.params.id){
            const id = req.params.id
            console.log("ID",id)
            const foundBranch = await branchModel.findOne({_id:id})
            res.status(200).json(foundBranch)
            console.log(foundBranch)
        }
        else{
            const foundBranch = await branchModel.find()
            // console.log("Request received at backend")
            // console.log(branches)
            res.status(200).json(foundBranch)
        }
    }
    catch(error){
        console.log("Error:",error)
    }
}
//Update a branch UPDATE operation
export const updateBranch = async (req,res)=>{
    try{
        const updated = await branchModel.findByIdAndUpdate(req.body._id, req.body)
        console.log("Branch updated successfully", updated)
        res.status(200).json({"msg":"Branch updated Successfully"})
    }
    catch(e){
        res.status(400).json({"msg": "Update failed"})
    }
}

//Update a branch DELETE operation
export const deleteBranch = async (req,res)=>{
    try{
        const deleted = await branchModel.findByIdAndDelete(req.body._id)
        console.log("Branch deleted successfully", deleted)
        res.status(200).json({"msg":"Branch deleted Successfully"})
    }
    catch(e){
        res.status(400).json({"msg": "Delete failed"})
    }
}

//Add internet connection CREATE
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

//Getting Internet details READ
export const getInternetDetails = async (req,res)=>{
    console.log("Request for internet details")
    console.log(req.params.id)
    try{
        if(req.params.id){
            const foundInternet = await internetConnectionModel.findOne({_id:req.params.id})
            console.log(foundInternet)
            res.status(200).json(foundInternet)
        }
        else{
            const foundInternet = await internetConnectionModel.find()
            // console.log("Request received at backend")
            // console.log(connections)
            res.status(200).json(foundInternet)
        }
    }
    catch(error){
        console.log("Error:",error)
    }
}
//Update internet connection UPDATE
export const updateInternetConnection = async (req,res)=>{
    console.log("Data received at backend")
    console.log(req.body)
    try{
        const updated = await internetConnectionModel.findByIdAndUpdate(req.body._id, req.body)
        console.log("Connection updated Successfully")
        res.status(200).json(updated)
    }
    catch(error){
        res.status(400).json({"msg": "Update failed"})
    }
}
//Delete internet connection DELETE
export const deleteInternetConnection = async (req,res)=>{
    console.log("Data received at backend")
    console.log(req.body)
    try{
        const deleted = await internetConnectionModel.findByIdAndDelete(req.body._id)
        console.log("Connection deleted Successfully")
        res.status(200).json(deleted)
    }
    catch(error){
        res.status(400).json({"msg": "Delete failed"})
    }
}

//Adding a firewall CREATE
export const addFirewall = async (req,res)=>{
    //console.log("Data received at backend")
    //console.log(req.body)
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
//Getting firewall info READ
export const getFirewallDetails = async (req,res)=>{
    //console.log("Request for Firewall details")
    try{
        if(req.params.id){
            const id = req.params.id
            console.log("Request for ID",req.params.id)
            const requested = await firewallModel.findOne({_id:id})
            console.log(requested)
            res.status(200).json(requested)
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
//Update a firewall UPDATE
export const updateFirewall = async (req,res)=>{
    console.log("Data received at backend")
    console.log(req.body)
    try{
        const updated = await firewallModel.findByIdAndUpdate(req.body._id, req.body)
        
        console.log("Firewall updated Successfully")
        res.status(200).json(updated)
    }
    catch(error){
        res.status(400).json({"msg": "Update failed"})
    }
}

//Delete a firewall DELETE
export const deleteFirewall = async (req,res)=>{
    //console.log("Data received at backend")
    //console.log(req.body)
    try{
        const deleted = await firewallModel.findByIdAndDelete(req.body._id)
        
        console.log("Firewall deleted Successfully")
        res.status(200).json(deleted)
    }
    catch(error){
        res.status(400).json({"msg": "Delete failed"})
    }
}

//Adding a Switch CREATE
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
    //console.log("Request for Firewall details")
    try{
        if(req.params.id){
            const id = req.params.id
            const nswitch = await switchModel.findOne({_id:id})
            //console.log(nswitch)
            res.status(200).json(nswitch)
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

//Update a switch UPDATE
export const updateSwitch = async (req,res)=>{
    console.log("Data received at backend")
    console.log("Req body",req.body)
    try{
        const updated = await switchModel.findByIdAndUpdate(req.body._id, req.body)
        console.log("Switch found", updated)
        res.status(200).json(updated)
    }
    catch(error){
        res.status(400).json({"msg": "Update failed"})
    }
}

//Delete a switch DELETE
export const deleteSwitch= async (req,res)=>{
    //console.log("Data received at backend")
    //console.log(req.body)
    try{
        const deleted = await switchModel.findByIdAndDelete(req.body._id)
        
        console.log("Switch deleted Successfully")
        res.status(200).json(deleted)
    }
    catch(error){
        res.status(400).json({"msg": "Delete failed"})
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
    console.log("Request for Controller details")
    try{
        if(req.params.id){
            const id = req.params.id
            const controller = await wlcModel.findOne({_id:id})
            console.log("FoundController",controller)
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
//Update a WLC UPDATE
export const updateWLC = async (req,res)=>{
    console.log("Data received at backend")
    console.log(req.body)
    try{
        const updated = await wlcModel.findByIdAndUpdate(req.body._id, req.body)
        
        console.log("Controller updated Successfully")
        res.status(200).json(updated)
    }
    catch(error){
        res.status(400).json({"msg": "Update failed"})
    }
}

//Delete a WLC DELETE
export const deleteWLC= async (req,res)=>{
    //console.log("Data received at backend")
    //console.log(req.body)
    try{
        const deleted = await wlcModel.findByIdAndDelete(req.body._id)
        
        console.log("Switch deleted Successfully")
        res.status(200).json(deleted)
    }
    catch(error){
        res.status(400).json({"msg": "Delete failed"})
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
    //console.log("Request for Firewall details")
    try{
        if(req.params.id){
            const id = req.params.id
            const ap = apModel.findOne({_id:id})
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
//Update a AP UPDATE
export const updateAP = async (req,res)=>{
    //console.log("Data received at backend")
    //console.log(req.body)
    try{
        const updated = await apModel.findByIdAndUpdate(_id,req.body.id)
        
        console.log("AP updated Successfully")
        res.status(200).json(updated)
    }
    catch(error){
        res.status(400).json({"msg": "Update failed"})
    }
}

//Delete a AP DELETE
export const deleteAP= async (req,res)=>{
    //console.log("Data received at backend")
    //console.log(req.body)
    try{
        const deleted = await apModel.findByIdAndDelete(req.body._id)
        
        console.log("AP deleted Successfully")
        res.status(200).json(deleted)
    }
    catch(error){
        res.status(400).json({"msg": "Delete failed"})
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
    //console.log("Request for Firewall details")
    try{
        if(req.params.id){
            const id = req.params.id
            const ssid = ssidModel.findOne({_id:id})
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
//Update a SSID UPDATE
export const updateSSID= async (req,res)=>{
    //console.log("Data received at backend")
    //console.log(req.body)
    try{
        const updated = await ssidModel.findByIdAndUpdate(_id, req.body.id)
        
        console.log("SSID updated Successfully")
        res.status(200).json(updated)
    }
    catch(error){
        res.status(400).json({"msg": "Update failed"})
    }
}

//Delete a SSID DELETE
export const deleteSSID= async (req,res)=>{
    //console.log("Data received at backend")
    //console.log(req.body)
    try{
        const deleted = await ssidModel.findByIdAndDelete(req.body._id)
        
        console.log("SSID deleted Successfully")
        res.status(200).json(deleted)
    }
    catch(error){
        res.status(400).json({"msg": "Delete failed"})
    }
}

export const loginHandler = async (req,res)=>{
    try{
        //get user input
        const {email,password} = req.body;

       //check all inputs are entered
       if(!(email && password)){
            res.status(400).json({"msg":"All inputs are required"})
       }

       //check if user exists
       const user = await User.findOne({email})

       if(user && (await bcrypt.compare(password, user.password))){
        const token = jwt.sign(
            {user_id: user._id, user_name:user.first_name},
            process.env.JWT_SECRET,
            {
                expiresIn:"2h"
            }
        )
        user.token = token

        res.status(200).json(user)
       }
       else res.status(401).json({"msg":"Incorrect credentials"})
    }
    catch(error){
        console.log(error)
    }
}
export const signupHandler = async (req,res)=>{
    try{
        console.log(req.body)
        //read all entered inputs
        const {first_name,last_name,email,password} = req.body;

        //Check all the requried fields are entered
        if(!(first_name && last_name && email && password)){
            res.status(400).json({"msg":"All inputs are required"})
        }

        //validate if entered email already exists
        const existUser = await User.findOne({email})
        
        if(existUser){
            console.log("exisUser",existUser)
            res.status(400).json({"msg":"Email already exist, please login"})
        }

        //encrypt password
        const encryptedPassword = await bcrypt.hash(password,10)

        //Create user in database
        const user = new User({...req.body, email: email.toLowerCase() , password: encryptedPassword })
        await user.save()

        //create a token
        const token = jwt.sign(
            {user_id: user._id, email},
            process.env.JWT_SECRET,
            {
                expiresIn: "2h"
            }
        )
        user.token = token
        res.status(201).json(user)
    }
    catch(error){
        console.log(error)
    }
}

export const checkAuthentication = (req,res)=>{
    res.json({isLogged: true, user: req.user})
}