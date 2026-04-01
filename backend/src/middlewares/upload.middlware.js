import dotenv from 'dotenv';
import { asyncHandler } from "../utils/async-handler.js"
import{ApiError} from "../utils/api.errors.js"

dotenv.config({
    path:"./backend/.env"
}); 

const admin_user = process.env.ADMINUSER.split(",")

export const verifyAdminuser = asyncHandler(async(req,_,next)=>{
    try {
        const user_id = req.user._id.toString()
        const username = req.user.username
        if(admin_user.includes(user_id)){
            console.log("U have the access to upload",user_id,username)
            next()
        }
        else{
            throw new ApiError(401,"Invalid Access")
            // console.log("U don't have the access to upload")
            // console.log("err at upload middleware ", user_id)
        }
        
    } catch (error) {
        console.log("Error occur at Upload middleware",error)
        throw new ApiError(401,"Invalid Access")
    }

})
