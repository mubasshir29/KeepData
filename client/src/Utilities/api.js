import axios from 'axios'
const server = "http://localhost:9500"

//Add Branch
export const addBranch = async (branch)=>{
    console.log("From API",branch)
    try{
        await axios.post(`${server}/new/branch`,branch)
        //console.log("Data sent")
    }
    catch(error){
        console.log("Error in sending data",error)
    }
}

//Gettign a branch details
export const getBranch = async (id)=>{
    try{
        const data = await axios.get(`${server}/branch/${id}`)
        console.log("Data received", data)
        return data.data
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}

//Getting all branches details
export const getAllBranches = async ()=>{
    try{
        const response = await axios.get(`${server}/branch`)
        //console.log("Data received", response.data)
        return response.data
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}
//updating a branch
export const updateBranch = async (branch)=>{
    console.log("From API",branch)

    try{
        const response = await axios.post(`${server}/edit/branch`,branch)
        return response
    }
    catch(error){
        console.log("Error in sending data",error)
    }
}
//deleting a branch
export const deleteBranch = async (branch)=>{
    console.log("From API",branch)

    try{
        const response = await axios.delete(`${server}/delete/branch`,branch)
        return response
    }
    catch(error){
        console.log("Error in sending data",error)
    }
}

//Adding Internet Connection
export const addInternetConnection = async (connection)=>{
    try{
        const response = await axios.post(`${server}/new/internet`,connection)
        // console.log("Response received", response.status)
        // console.log(response.data)
        return response;
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}

//Getting Internet Connection Details
export const getInternetDetails = async (id)=>{
    console.log("From API",id)
    try{
        const response = await axios.get(`${server}/internet/${id}`)
        // console.log("Getting internet details from backend")
        // console.log("Internet Data received", response.data)
        return response.data
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}

//Getting All Internet Details
export const getAllInternetDetails = async ()=>{
    try{
        const response = await axios.get(`${server}/internet`)
        // console.log("Getting internet details from backend")
        // console.log("Internet Data received", response.data)
        return response.data
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}
//update internet
export const updateInternetConnection = async (connection)=>{
    try{
        const response = await axios.post(`${server}/edit/internet`,connection)
        console.log("Response received", response.status)
        console.log("In API",response.data)
        return response;
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}
//delete internet
export const deleteInternetConnection = async (connection)=>{
    try{
        const response = await axios.delete(`${server}/edit/internet`,connection)
        console.log("Response received", response.status)
        console.log("In API",response.data)
        return response;
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}

//Adding A Firewall
export const addFirewall = async (newFirewall)=>{
    //console.log(newFirewall)
    try{
        const response = await axios.post(`${server}/new/firewall`,newFirewall)
        // console.log("Response received", response.status)
        //console.log("Response to Add Firewall",response.data)
        return response;
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}

//Getting a firewall details
export const getFirewallDetails = async (id)=>{
    try{
        console.log("From API", id)
        const response = await axios.get(`${server}/firewall/${id}`)
        console.log("Getting firewall details from backend")
        //console.log("Firewall Data received", response.data)
        console.log(response.data)
        return response.data
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}

//Getting all firewall details
export const getAllFirewallDetails = async ()=>{
    try{
        const response = await axios.get(`${server}/firewall`)
        // console.log("Getting firewall details from backend")
        //console.log("Firewall Data received", response.data)
        //console.log(response.data)
        return response.data
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}
//update firewall details
export const updateFirewall = async (firewall)=>{
    console.log(firewall)
    try{
        const response = await axios.post(`${server}/edit/firewall`, firewall)
        console.log("Getting firewall details from backend")
        console.log("Firewall Data received", response)
        return response
    }
    catch(error){
        return error
    }
}
//delete firewall details
export const deleteFirewall = async (firewall)=>{
    try{
        const response = await axios.delete(`${server}/firewall/delete`, firewall)
        // console.log("Getting firewall details from backend")
        //console.log("Firewall Data received", response.data)
        return response.data
    }
    catch(error){
        return error
    }
}

//Adding a switch
export const addSwitch = async (newSwitch)=>{
    //console.log(newSwitch)
    try{
        const response = await axios.post(`${server}/new/switch`,newSwitch)
        console.log("Response received", response.status)
        //console.log("Response to Add Firewall",response.data)
        return response;
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}

//Gettinga a switch details
export const getSwitchDetails = async (id)=>{
    console.log("In API")
    try{
        const response = await axios.get(`${server}/switch/${id}`)
        console.log("Getting switch details from backend")
        console.log("Firewall Data received", response.data)
        return response.data
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}

//Getting all switch details
export const getAllSwitchDetails = async ()=>{
    try{
        const response = await axios.get(`${server}/switch`)
        // console.log("Getting all switch details from backend")
        //console.log("Firewall Data received", response.data)
        return response.data
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}
//update switch details
export const updateSwitch = async (nswitch)=>{
    console.log("In API",nswitch)
    try{
        const response = await axios.post(`${server}/edit/switch`, nswitch)
        console.log("Getting firewall details from backend")
        console.log("Firewall Data received", response.data)
        return response
    }
    catch(error){
        return error
    }
}
//delete firewall details
export const deleteSwitch = async (firewall)=>{
    try{
        const response = await axios.delete(`${server}/switch/delete`, firewall)
        // console.log("Getting firewall details from backend")
        //console.log("Firewall Data received", response.data)
        return response.data
    }
    catch(error){
        return error
    }
}

//Adding a wireless Controller
export const addWLC = async (newWLC)=>{
    //console.log(newWLC)
    try{
        const response = await axios.post(`${server}/new/wlc`,newWLC)
        //console.log("Response received", response.status)
        //console.log("Response to Add Firewall",response.data)
        return response;
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}

//Getting a wlc details
export const getWlcDetails = async (id)=>{
    console.log("In API")
    try{
        const response = await axios.get(`${server}/wlc/${id}`)
        // console.log("Getting firewall details from backend")
        // console.log("WLC Data received", response.data)
        return response.data
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}

//Getting all wlc details
export const getAllWlcDetails = async ()=>{
    try{
        const response = await axios.get(`${server}/wlc`)
        //console.log("Getting firewall details from backend")
        //console.log("WLC Data received", response.data)
        return response.data
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}
//update switch details
export const updateWLC = async (wlc)=>{
    console.log("Updating WLC")
    try{
        const response = await axios.post(`${server}/edit/wlc`, wlc)
        console.log("Getting controller details from backend")
        console.log("Controller Data received", response.data)
        return response
    }
    catch(error){
        return error
    }
}
//delete firewall details
export const deleteWLC= async (wlc)=>{
    try{
        const response = await axios.delete(`${server}/wlc/delete`, wlc)
        // console.log("Getting firewall details from backend")
        //console.log("Firewall Data received", response.data)
        return response.data
    }
    catch(error){
        return error
    }
}

//Adding an AP
export const addAP = async (newAP)=>{
    //console.log(newAP)
    try{
        const response = await axios.post(`${server}/new/ap`,newAP)
        //console.log("Response received", response.status)
        //console.log("Response to Add Firewall",response.data)
        return response;
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}

//Getting an AP details
export const getAPDetails = async (id)=>{
    try{
        const response = await axios.get(`${server}/ap/${id}`)
        //console.log("Getting firewall details from backend")
        //console.log("WLC Data received", response.data)
        return response.data
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}

//Getting all AP details
export const getAllAPDetails = async ()=>{
    try{
        const response = await axios.get(`${server}/ap`)
        //console.log("Getting firewall details from backend")
        //console.log("WLC Data received", response.data)
        return response.data
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}
//update ap details
export const updateAP = async (ap)=>{
    try{
        const response = await axios.post(`${server}/wlc/edit`, ap)
        // console.log("Getting firewall details from backend")
        //console.log("Firewall Data received", response.data)
        return response.data
    }
    catch(error){
        return error
    }
}
//delete ap details
export const deleteAP = async (ap)=>{
    try{
        const response = await axios.delete(`${server}/wlc/delete`, ap)
        // console.log("Getting firewall details from backend")
        //console.log("Firewall Data received", response.data)
        return response.data
    }
    catch(error){
        return error
    }
}

//Adding an SSID
export const addSSID = async (newSSID)=>{
    //console.log(newSSID)
    try{
        const response = await axios.post(`${server}/new/ssid`,newSSID)
        //console.log("Response received", response.status)
        //console.log("Response to Add Firewall",response.data)
        return response;
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}

//Getting an SSID details 
export const getSSIDDetails = async (id)=>{
    try{
        const response = await axios.get(`${server}/ssid/${id}`)
        //console.log("Getting firewall details from backend")
        //console.log("WLC Data received", response.data)
        return response.data
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}

//Getting all SSID details
export const getAllSSIDDetails = async ()=>{
    try{
        const response = await axios.get(`${server}/ssid`)
        //console.log("Getting firewall details from backend")
        //console.log("WLC Data received", response.data)
        return response.data
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}
//update ap details
export const updateSSID = async (ssid)=>{
    try{
        const response = await axios.post(`${server}/ssid/edit`, ssid)
        // console.log("Getting firewall details from backend")
        //console.log("Firewall Data received", response.data)
        return response.data
    }
    catch(error){
        return error
    }
}
//delete ap details
export const deleteSSID = async (ssid)=>{
    try{
        const response = await axios.delete(`${server}/ssid/delete`, ssid)
        // console.log("Getting firewall details from backend")
        //console.log("Firewall Data received", response.data)
        return response.data
    }
    catch(error){
        return error
    }
}

//User Signup
export const userSignUp = async (user_data) =>{
    //console.log(user_data)
    let signupResponse;
    try{
        signupResponse = await axios.post(`${server}/signup`, user_data)
        console.log("Response in API",signupResponse)
        return signupResponse
    }
    catch(error){
        console.log("signupResponse:",error.response.status)
        return error.response
    }
}

//User Login
export const userLogin = async (user_data) =>{
    try{
        const lgoinResponse = await axios.post(`${server}/login`, user_data)
        console.log("Login Response",lgoinResponse)
        return lgoinResponse
    }
    catch(error){
        console.log(error)
    }
}

//Check Login status
export const checkLoginStatus = async ()=>{
    try{
        const loginStatus = await axios.get(`${server}/isAuthenticated`,{
            headers:{
                "x-access-token":localStorage.getItem("token")
            }
        }) //{isLogged: true, user: req.user}
        console.log("From API: ",loginStatus.data)
        return loginStatus.data
    }
    catch(error){
        console.log(error)
    }
}