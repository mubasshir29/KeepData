import { query } from 'express';
import jwt from 'jsonwebtoken'

const verifyToken = (req,res,next)=>{
    const token = req.token || req.query.token || req.headers["x-access-token"];

    if(!token){
        return res.status(401).json({"msg":"Token is required"})
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log("Decoded token",decoded)
        req.user = decoded
    }
    catch(error){
        res.status(401).json({"msg":"Invalid token"})
    }
    return next();
}

export default verifyToken;