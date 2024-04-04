import express, { Router } from 'express'
import Routes from './Routes'
import dotenv from 'dotenv'

dotenv.config()


const api=express()
api.use(express.json())
api.use(Routes)
api.listen(process.env.PORT,()=>console.log(`http://localhost:${process.env.PORT}`))