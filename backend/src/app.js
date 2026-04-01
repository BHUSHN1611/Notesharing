import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser"

const app = express();

// basic configuration
app.use(cookieParser());
app.use(express.json()) // it allows to send the json data
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))


// cors configuration 
app.use(cors({
  origin: ['https://notesharing-frontend-a50k.onrender.com', 'http://localhost:5173','http://localhost:5174'],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))

app.get('/',(req,res)=>{
    res.send("Hey Welcome to Note-sharing")
})

import healthCheckRouter from './routes/healthcheck.route.js';
import  fileRouter from './routes/file.route.js';
import userRouter from './routes/user.route.js'
import adminRouter from './routes/admin.route.js'

app.use("/health",healthCheckRouter);

app.use("/file",fileRouter);

app.use("/user",userRouter);

app.use("/admin",adminRouter);

export default app;

