import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    loggedStatus: false,
    username: null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setLogin: (state,action)=>{
            state.loggedStatus = true
            state.username = action.payload
        },
        setLogout: (state, action)=>{
            state.loggedStatus = false
            state.username = null
        }
    }

})

export const {setLogin, setLogout} = authSlice.actions

export default authSlice.reducer