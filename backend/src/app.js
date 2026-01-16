import express from "express";
import cors from 'cors'

const app = express();

// basic configuration
app.use(express.json()) // it allows to send the json data
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

// cors configuration 
app.use(cors({
  origin: ['https://notesharing-frontend-a50k.onrender.com/', 'http://localhost:5173'],
  origin: process.env.FRONTEND_URL,
  credentials: true
}))

app.get('/',(req,res)=>{
    res.send("Hey Welcome to Note-sharing")
})

import healthCheckRouter from './routes/healthcheck.route.js';
import  fileRouter from './routes/file.route.js';

app.use('/health',healthCheckRouter)
app.use("/file",fileRouter)

// "/file/upload" 
export default app

