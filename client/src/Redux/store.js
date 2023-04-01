import authReducer from './authSlice.js'
import dashboardReducer from './dashboardSlice.js'
import dataReducer from './dataSlice.js'
import { configureStore } from '@reduxjs/toolkit'
import {combineReducers} from 'redux'

const store = configureStore({
    reducer: combineReducers({
        authReducer,
        dashboardReducer,
        dataReducer

    })
})

export default store