import axios from 'axios'
const server = "http://localhost:9500"

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

export const updateBranch = async (branch)=>{
    console.log("From API",branch)

    try{
        await axios.post(`${server}/edit/branch`,branch)
        //console.log("Data sent")
    }
    catch(error){
        console.log("Error in sending data",error)
    }
}


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

export const getInternetDetails = async (id)=>{
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
export const getFirewallDetails = async (id)=>{
    try{
        const response = await axios.get(`${server}/firewall/${id}`)
        // console.log("Getting firewall details from backend")
        //console.log("Firewall Data received", response.data)
        return response.data
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}
export const getAllFirewallDetails = async ()=>{
    try{
        const response = await axios.get(`${server}/firewall`)
        // console.log("Getting firewall details from backend")
        //console.log("Firewall Data received", response.data)
        return response.data
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}

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

export const getSwitchDetails = async (id)=>{
    try{
        const response = await axios.get(`${server}/switch/${id}`)
        // console.log("Getting switch details from backend")
        //console.log("Firewall Data received", response.data)
        return response.data
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}
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
export const getWlcDetails = async (id)=>{
    try{
        const response = await axios.get(`${server}/wlc/${id}`)
        //console.log("Getting firewall details from backend")
        //console.log("WLC Data received", response.data)
        return response.data
    }
    catch(error){
        console.log("Error in getting data",error)
    }
}
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