import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    allBranches: [],
    allInternet: [],
    allFirewalls: [],
    allSwitches:[],
    allWLC: [],
    allSSID: [],
    allAPS: []
}

const countSlice = createSlice({
    name:"dash_count",
    initialState,
    reducers:{
        setData: (state, action)=>{
            switch(action.payload.category){
                case "branch" : state.allBranches = action.payload.data; break;
                case "internet" : state.allInternet = action.payload.data; break;
                case "firewall" : state.allFirewalls = action.payload.data; break;
                case "nswitch" : state.allSwitches = action.payload.data; break;
                case "wlc" : state.allWLC = action.payload.data; break;
                case "ssid" : state.allSSID = action.payload.data; break;
                case "ap" : state.allAPS = action.payload.data; break;
            }
        },
        addCount: (state,action)=>{
            switch(action.payload){
                case "branch" : state.branchCount += 1; break;
                case "internet" : state.internetCount += 1; break;
                case "firewall" : state.firewallCount += 1; break;
                case "nswitch" : state.switchCount += 1; break;
                case "wlc" : state.wlcCount += 1; break;
                case "ssid" : state.ssidCount += 1; break;
                case "ap" : state.apCount += 1; break;
            }
        },
        setCount: (state,action)=>{
            switch(action.payload.category){
                case "branch" : state.branchCount = action.payload.count; break;
                case "internet" : state.internetCount = action.payload.count; break;
                case "firewall" : state.firewallCount = action.payload.count; break;
                case "nswitch" : state.switchCount = action.payload.count; break;
                case "wlc" : state.wlcCount = action.payload.count; break;
                case "ssid" : state.ssidCount = action.payload.count; break;
                case "ap" : state.apCount = action.payload.count; break;
            }
        }
        
    }

})

export const {setCount, addCount,setData} = countSlice.actions

export default countSlice.reducer