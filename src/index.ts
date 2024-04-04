import express, { Router } from 'express'
import Routes from './Routes'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()


const api=express()
api.use(cors({
    origin:'*'
  }))
api.use(express.json())
api.use(express.urlencoded({extended:true}))
api.use(Routes)
api.listen(process.env.PORT,()=>console.log(`http://localhost:${process.env.PORT}`))