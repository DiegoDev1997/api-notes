import { NextFunction,Request,Response } from "express";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'




dotenv.config()
export const Auth={
    validateToken:(req:Request,res:Response,next:NextFunction)=>{
    
            let sucess=false
            if(req.headers.authorization){
                const [authType,token]=req.headers.authorization.split(' ')
                if(authType === 'Bearer'){
                    try{
                        jwt.verify(token,process.env.JWT_KEY as string)
                        sucess=true

                    }catch(e){
                        console.error(e)
                    }
                }
            }

            if(sucess){
                next()
            }else{
                res.status(403).json({error:'não autorizado'})
            }








    }
}