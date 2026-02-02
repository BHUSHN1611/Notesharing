import {asyncHandler} from "../utils/async-handler.js";
import {ApiError} from "../utils/api.errors.js";
import { User } from "../models/user.model.js";
import {ApiResponse} from "../utils/api.response.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave:false}) // no validation

        return {accessToken,refreshToken}

    } catch (error) {
        throw new ApiError(500,"Something went wrong while generating refresh and access token")
        
}}

const registerUser = asyncHandler(async (req,res)=>{
  
    const {email,username,password} = req.body;


    if ([email,username,password].some((field)=> field.trim() === "" ))
    {
        throw new ApiError(400,"all creds is required")
    }

    const existedUser = await User.findOne({
        $or:[ { username },{ email}]
    })

    if(existedUser){
        throw new ApiError(409,"user with email or username is already existed ")
    }

    const user = await User.create({
        email,
        password,
        username:username.toLowerCase(),
    })

    const createdUser =  await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if(!createdUser){
        throw ApiError(500,"Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser,"User registered Successfully")
    )

})
const loginUser = asyncHandler(async(req,res)=>{

    // req body -> data 
    // username or email
    // find the user
    // password check
    // access and refresh token 
    // send cookie

    const {email,password} =req.body
    if (!email){
        throw new ApiError(400,"Email is required")
    }

    const user = await User.findOne({email})

    if(!user){
        throw new ApiError(404,"User not found")
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if(!isPasswordValid){
        throw new ApiError(401,"Incorrect Password")
    }
    const {accessToken,refreshToken}  = await generateAccessAndRefereshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
     
     const options = {
        httpOnly : true,
        secure: true,
        sameSite: "none",    
        maxAge: 7 * 24 * 60 * 60 * 1000 
     }
     return res
     .status(200)
     .cookie("accessToken",accessToken,options)
     .cookie("refreshToken",refreshToken,options)
     .json(
        new ApiResponse(
            200,
            {
                user:loggedInUser,accessToken,
                refreshToken
            },
            "user logged in successfully "
        )
     )

})
const logoutUser = asyncHandler(async(req,res)=>{
    await User.findByIdAndUpdate(
        req.user._id,{
            $set:{
                refreshToken:undefined
            }
        },
        {
            new:true
        }
    )
    const options = {
        httpOnly : true,
        secure: true,
     }
     return res.status(200)
     .clearCookie("accessToken",options)
     .clearCookie("refereshToken",options)
     .json(new ApiResponse(200,{},"User Logout"))

})
const refreshAccessToken = asyncHandler(async(req,res)=>{
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if(!incomingRefreshToken){
        throw new ApiError(401 , "Unauthorized request")
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const user = User.findById(decodedToken?._id)
        if(!user){
            throw new ApiError(401 , "Invalid refresh token")
        }
    
        if (incomingRefreshToken !== user?.refreshToken){
            throw new ApiError(401 , "Invalid refresh token")
        }
    
        const option = {
            httpOnly:true,
            secure:true
        }
    
        const {accessToken,newrefreshToken} = await generateAccessAndRefereshTokens(user._id)
    
        return res
        .status(200)
        .cookie("accessToken",accessToken)
        .cookie("refresToken",newrefreshToken)
        .json(
            new ApiResponse(
                200,
                {accessToken,refreshToken:newrefreshToken},
                "Access token refreshed"
    
            )
        )
    } catch (error) {
        throw new ApiError(401 , error?.message || "Invalid refresh token")
        
    }


    

})
const getUserDetails = asyncHandler(async(req,res)=>{
    res.json({
    username: req.user.username
  });
})

export{
    registerUser,
    loginUser,
    getUserDetails
}