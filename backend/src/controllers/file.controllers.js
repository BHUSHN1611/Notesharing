//utils
import {asyncHandler} from '../utils/async-handler.js'
import {ApiError} from "../utils/api.errors.js"
import { ApiResponse } from "../utils/api.response.js"
import {uploadCloundinary} from "../utils/cloundinary.js"
import jwt from "jsonwebtoken";

// packages and service
import { v2 as cloudinary } from 'cloudinary';
import axios from "axios";

//models
import {Notes} from "../models/notes.model.js"
import { Qp } from "../models/qp.model.js"
import { Exp } from "../models/exp.model.js"

import { User } from '../models/user.model.js';

const fileUpload = asyncHandler(async (req,res) => {
    const type  = req.body.fileType;
    const subject  = req.body.subject;
    const fileLocalPath = req.file.path;
    console.log(fileLocalPath,type,subject)

    if(!fileLocalPath){
        throw new ApiError(400,"files is required")
    }
    const file =  await uploadCloundinary(fileLocalPath);

    if(!file){
        throw new ApiError(400,"files is not upload succesfully")
    }

    switch (type) {
      case 'notes':
        await Notes.create({ title: req.file.originalname, fileUrl: file.url, cloudinaryId: file.asset_id, public_id: file.public_id, type, subject });
        break;
      case 'ques':
        await Qp.create({ title: req.file.originalname, fileUrl: file.url, cloudinaryId: file.asset_id,public_id: file.public_id ,type, subject });
        break;
      case 'exp':
        await Exp.create({ title: req.file.originalname, fileUrl: file.url, cloudinaryId: file.asset_id,public_id: file.public_id, type, subject });
        break;
  default:
    throw new Error('Unknown type');
}

    return res.status(201).json(
        new ApiResponse(200,"File uploaded successfully")
    )

})


// view file function
const viewfiles = (model)=>asyncHandler(async(req,res)=>{
  try {
        const files = await model.find()
      res.json(files)
    } 
    catch (err) {
    res.status(500).json({ message: "Failed to fetch files" })
  }
})
const viewNotes = viewfiles(Notes)
const viewQp= viewfiles(Qp)
const viewExp = viewfiles(Exp)

// download function
const downloadFile = (model) => asyncHandler(async(req,res)=>{
    try {
      // console.log("Download ID:", req.params)
      const file = await model.findById(req.params.id)
      if (!file) return res.status(404).send("Note not found",req.params.id)

      const response = await axios.get(file.fileUrl, {
        responseType: "stream"
      })

      res.setHeader(
        "Content-Disposition",
        `attachment; filename="${file.title}.pdf"`
      )
      res.setHeader("Content-Type", "application/pdf")
      response.data.pipe(res)

  } catch (err) {
      console.error("DOWNLOAD ERROR:", err)
      res.status(500).send("Download failed")
  }
   
})
const downloadNotesFile = downloadFile(Notes);
const downloadExpFile = downloadFile(Exp);
const downloadQpFile = downloadFile(Qp);

// live view funtion
const viewFile = (model)=>asyncHandler(async(req,res)=>{
    try {
    // console.log("View ID:", req.params)
    const viewedfile = await model.findById(req.params.id)
    if (!viewedfile) return res.status(404).send("Note not found",req.params.id)

    const response = await axios.get(viewedfile.fileUrl, {
      responseType: "stream"
    })

    // Force browser download
    res.setHeader(
      "Content-Disposition",
      `inline; filename="${viewedfile.title}"`
    )
    res.setHeader("Content-Type", "application/pdf")

    response.data.pipe(res)

  } catch (err) {
    console.error("View ERROR :", err)
    res.status(500).send("Download failed")
  }
   
})
const viewNotesFile = viewFile(Notes);
const viewExpFile = viewFile(Exp);
const viewQpFile = viewFile(Qp);

// delete function 
const deleteFile = (model) => asyncHandler(async (req, res) => {
  console.log("🔥 DELETE API HIT", req.method, req.originalUrl);
  
  try {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken");

    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }

    if (user.id !== "6980c92f750a79b48af2bec9") {
      return res.status(403).json({ message: "Deleting not allowed" });
    }

    const file = await model.findById(req.params.id);
    if (!file) {
      return res.status(404).json({ message: `File not found: ${req.params.id}` });
    }

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(file.public_id, { resource_type: "raw" });

    // Delete from MongoDB
    await model.findByIdAndDelete(req.params.id);

    res.json({ message: "File deleted successfully" });
  } catch (deleteError) {
    console.error("Error while deleting file:", deleteError);
    throw new ApiError(500, "Error while deleting file", deleteError);
  }
});
const deleteNotesFile = deleteFile(Notes);
const deleteExpFile = deleteFile(Exp);
const deleteQpFile = deleteFile(Qp);
// calculate the length of document 
const lengthDB = (model) => asyncHandler(async (req, res) => {
  const numberOfDocuments = await model.countDocuments();
  if (numberOfDocuments === undefined || numberOfDocuments === null) {
    throw new ApiError(400, "Error occurred while counting documents");
  }
  res.json({ count: numberOfDocuments });

});
const NoteLengthDB = lengthDB(Notes);
const ExpLengthDB = lengthDB(Exp);
const QpLengthDB = lengthDB(Qp);
const UserLengthDB = lengthDB(User);

const totalNotesSubjectUploads = asyncHandler(async(req,res,next)=>{
  const subject = ['spcc','mc','iot','ai','css'];
  const TotalSubjectUploads = {};
for (const element of subject) {
  const numberOfUploads = await Notes.countDocuments({ subject: element });
  TotalSubjectUploads[element] = numberOfUploads;
}
  res.json({ count: TotalSubjectUploads });
})

const latestUploads = asyncHandler(async (req, res, next) => {

  const latestUploadedDocuments = await Notes.find().sort({ createdAt: -1 }).limit(5);

  if (!latestUploadedDocuments || latestUploadedDocuments.length === 0) {
    throw new ApiError(400, "Error occurred while fetching latest uploads");
  }
  const titles = latestUploadedDocuments.map(doc => doc.title)
  res.json({titles});
});


const viewAllFiles = asyncHandler(async(req,res)=>{
    try {
        const notes = await Notes.find().sort({ createdAt: -1 })
      res.json(notes)
    } 
    catch (err) {
    res.status(500).json({ message: "Failed to fetch notes" })
}})

export {fileUpload,viewAllFiles,
  downloadNotesFile,downloadExpFile,downloadQpFile,
  deleteNotesFile,deleteExpFile,deleteQpFile,
  viewNotes,viewExp,viewQp,
  viewNotesFile,viewQpFile,viewExpFile,
  NoteLengthDB,ExpLengthDB,QpLengthDB,UserLengthDB,
  totalNotesSubjectUploads,latestUploads
}
// 
//  const downloadNotesFile = asyncHandler(async(req,res)=>{
//     try {
//       console.log("Download ID:", req.params)
//       const note = await Notes.findById(req.params.id)
//       if (!note) return res.status(404).send("Note not found",req.params.id)

//       const response = await axios.get(note.fileUrl, {
//         responseType: "stream"
//       })

//       // Force browser download
//       res.setHeader(
//         "Content-Disposition",
//         `attachment; filename="${note.title}.pdf"`
//       )
//       res.setHeader("Content-Type", "application/pdf")

//       response.data.pipe(res)

//   } catch (err) {
//       console.error("DOWNLOAD ERROR:", err)
//       res.status(500).send("Download failed")
//   }
   
// })
// const downloadExpFile = asyncHandler(async(req,res)=>{
//     try {
//     console.log("Download ID:", req.params)
//     const exp = await Exp.findById(req.params.id)
//     if (!exp) return res.status(404).send("Note not found",req.params.id)

//     const response = await axios.get(exp.fileUrl, {
//       responseType: "stream"
//     })

//     // Force browser download
//     res.setHeader(
//       "Content-Disposition",
//       `attachment; filename="${exp.title}.pdf"`
//     )
//     res.setHeader("Content-Type", "application/pdf")

//     response.data.pipe(res)

//   } catch (err) {
//     console.error("DOWNLOAD ERROR:", err)
//     res.status(500).send("Download failed")
//   }
   
// })
// const downloadQpFile = asyncHandler(async(req,res)=>{
//     try {
//     console.log("Download ID:", req.params)
//     const qp = await Qp.findById(req.params.id)
//     if (!qp) return res.status(404).send("Note not found",req.params.id,qp)

//     const response = await axios.get(qp.fileUrl, {
//       responseType: "stream"
//     })
//     // Force browser download
//     res.setHeader(
//       "Content-Disposition",
//       `attachment; filename="${qp.title}.pdf"`
//     )
//     res.setHeader("Content-Type", "application/pdf")

//     response.data.pipe(res)

//   } catch (err) {
//     console.error("DOWNLOAD ERROR:", err)
//     res.status(500).send("Download failed")
//   }
   
// })

// live view function

//  
// const viewNotesFile = asyncHandler(async(req,res)=>{
//     try {
//     console.log("View ID:", req.params)
//     const note = await Notes.findById(req.params.id)
//     if (!note) return res.status(404).send("Note not found",req.params.id)

//     const response = await axios.get(note.fileUrl, {
//       responseType: "stream"
//     })

//     // Force browser download
//     res.setHeader(
//       "Content-Disposition",
//       `inline; filename="${note.title}"`
//     )
//     res.setHeader("Content-Type", "application/pdf")

//     response.data.pipe(res)

//   } catch (err) {
//     console.error("DOWNLOAD ERROR:", err)
//     res.status(500).send("Download failed")
//   }
   
// })
// const viewQpFile = asyncHandler(async(req,res)=>{
//     try {
//     console.log("View ID:", req.params)
//     const qp = await Qp.findById(req.params.id)
//     if (!qp) return res.status(404).send("Note not found",req.params.id)

//     const response = await axios.get(qp.fileUrl, {
//       responseType: "stream"
//     })

//     // Force browser download
//     res.setHeader(
//       "Content-Disposition",
//       `inline; filename="${qp.title}"`
//     )
//     res.setHeader("Content-Type", "application/pdf")

//     response.data.pipe(res)

//   } catch (err) {
//     console.error("DOWNLOAD ERROR:", err)
//     res.status(500).send("Download failed")
//   }
   
// })
// const viewExpFile = asyncHandler(async(req,res)=>{
//     try {
//     console.log("View ID:", req.params)
//     const exp = await Exp.findById(req.params.id)
//     if (!exp) return res.status(404).send("Note not found",req.params.id)

//     const response = await axios.get(exp.fileUrl, {
//       responseType: "stream"
//     })

//     // Force browser download
//     res.setHeader(
//       "Content-Disposition",
//       `inline; filename="${exp.title}"`
//     )
//     res.setHeader("Content-Type", "application/pdf")

//     response.data.pipe(res)

//   } catch (err) {
//     console.error("DOWNLOAD ERROR:", err)
//     res.status(500).send("Download failed")
//   }
   
// })
// const viewNotes = asyncHandler(async(req,res)=>{
//   try {
//         const notes = await Notes.find({type:"notes"}).sort({ createdAt: -1 })
//       res.json(notes)
//     } 
//     catch (err) {
//     res.status(500).json({ message: "Failed to fetch notes" })
//   }
  
// })
// const viewQp = asyncHandler(async(req,res)=>{
//   try {
//         const qp = await Qp.find({type:"ques"}).sort({ createdAt: -1 })
//       res.json(qp)
//     } 
//     catch (err) {
//     res.status(500).json({ message: "Failed to fetch notes" })
//   }

// })
// const viewExp = asyncHandler(async(req,res)=>{
//    try {
//         const exp = await Exp.find({type:"exp"}).sort({ createdAt: -1 })
//       res.json(exp)
//     } 
//     catch (err) {
//     res.status(500).json({ message: "Failed to fetch notes" })
//   }
// })