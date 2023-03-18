import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginRequired from './LoginRequired'


function ProtectedRoute({logged, children}) {
    const navigate = useNavigate()

    useEffect(()=>{
        
    })
    if(!logged){
        return <LoginRequired/>
    }
    return children;
}

export default ProtectedRoute