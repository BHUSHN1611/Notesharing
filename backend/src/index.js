import dotenv from 'dotenv';
import  connectDB  from './db/db.connect.js';
import app from './app.js'


dotenv.config({
    path:"./.env"
}); 

const port = process.env.PORT || 8000

// Data base connection 
connectDB() // when the db is connected then only we listen.
.then(()=>{
    app.listen(port,()=>{
    console.log("Listening")
})
})
.catch((err)=>{
    console.error("Mongo connection error",err);
    process.exit(1)
})

