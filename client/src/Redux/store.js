import authReducer from './authSlice.js'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: authReducer
})

export default store