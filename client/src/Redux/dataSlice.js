import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

import {getAllBranches,getAllInternetDetails,getAllFirewallDetails,getAllWlcDetails,getAllSwitchDetails,getAllSSIDDetails,getAllAPDetails,deleteBranch,deleteInternetConnection,deleteFirewall,deleteSwitch,deleteWLC,deleteAP,deleteSSID} from './../Utilities/api.js'

const server = "http://localhost:9500"

export const getBranchData = createAsyncThunk("data/getBranchData", getAllBranches)
export const getInternetData = createAsyncThunk("data/getInternetData", getAllInternetDetails)
export const getFirewallData = createAsyncThunk("data/getFirewallData", getAllFirewallDetails)
export const getSwitchData = createAsyncThunk("data/getSwitchData", getAllSwitchDetails)
export const getWlcData = createAsyncThunk("data/getWlcData", getAllWlcDetails)
export const getSsidData = createAsyncThunk("data/getSsidData", getAllSSIDDetails)
export const getAPData = createAsyncThunk("data/getAPData", getAllAPDetails)

export const delBranchData = createAsyncThunk("data/delBranchData",(id) =>  deleteBranch(id))
export const delInternetData = createAsyncThunk("data/delInternetData",(id) =>  deleteInternetConnection(id))
export const delFirewallData = createAsyncThunk("data/delFirewallData",(id) =>  deleteFirewall(id))
export const delSwitchData = createAsyncThunk("data/delSwitchData",(id) =>  deleteSwitch(id))
export const delWlcData = createAsyncThunk("data/delWlcData",(id) =>  deleteWLC(id))
export const delSsidData = createAsyncThunk("datadeltSsidData",(id) =>  deleteSSID(id))
export const delAPData = createAsyncThunk("data/delAPData",(id) => deleteAP(id))

const initialState = {
    allBranches: [],
    allInternet: [],
    allFirewalls: [],
    allSwitches:[],
    allWLC: [],
    allSSID: [],
    allAPS: []
}

const dataSlice = createSlice({
    name:"data",
    initialState,
    reducers:{
        
    },
    extraReducers: (builder)=>{
        builder.addCase(getBranchData.fulfilled, (state,action) =>{
            state.allBranches = action.payload
        })
        builder.addCase(getInternetData.fulfilled, (state,action) =>{
            state.allInternet = action.payload
        })
        builder.addCase(getFirewallData.fulfilled, (state,action) =>{
            state.allFirewalls = action.payload
        })
        builder.addCase(getSwitchData.fulfilled, (state,action) =>{
            state.allSwitches = action.payload
        })
        builder.addCase(getWlcData.fulfilled, (state,action) =>{
            state.allWLC = action.payload
        })
        builder.addCase(getSsidData.fulfilled, (state,action) =>{
            state.allSSID = action.payload
        })
        builder.addCase(getAPData.fulfilled, (state,action) =>{
            state.allAPS = action.payload
        })

        builder.addCase(delBranchData.fulfilled, (state,action) =>{
            state.allBranches = action.payload
        })
        builder.addCase(delInternetData.fulfilled, (state,action) =>{
            state.allInternet = action.payload
        })
        builder.addCase(delFirewallData.fulfilled, (state,action) =>{
            state.allFirewalls = action.payload
        })
        builder.addCase(delSwitchData.fulfilled, (state,action) =>{
            state.allSwitches = action.payload
        })
        builder.addCase(delWlcData.fulfilled, (state,action) =>{
            state.allWLC = action.payload
        })
        builder.addCase(delSsidData.fulfilled, (state,action) =>{
            state.allSSID = action.payload
        })
        builder.addCase(delAPData.fulfilled, (state,action) =>{
            state.allAPS = action.payload
        })
    }
})

export const {} = dataSlice.actions

export default dataSlice.reducer