import {asyncHandler} from "../utils/async-handler.js"
import {ApiError} from "../utils/api.errors.js"
import {Notes} from "../models/notes.model.js"
import {uploadCloundinary} from "../utils/cloundinary.js"
import { ApiResponse } from "../utils/api.response.js"
import axios from "axios";
import { Qp } from "../models/qp.model.js"
import { Exp } from "../models/exp.model.js"

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
        await Notes.create({ title: req.file.originalname, fileUrl: file.url, cloudinaryId: file.asset_id, type, subject });
        break;
      case 'ques':
        await Qp.create({ title: req.file.originalname, fileUrl: file.url, cloudinaryId: file.asset_id, type, subject });
        break;
      case 'exp':
        await Exp.create({ title: req.file.originalname, fileUrl: file.url, cloudinaryId: file.asset_id, type, subject });
        break;
  default:
    throw new Error('Unknown type');
}

    return res.status(201).json(
        new ApiResponse(200,"File uploaded successfully")
    )

})
const viewAllFiles = asyncHandler(async(req,res)=>{
    try {
        const notes = await Notes.find().sort({ createdAt: -1 })
      res.json(notes)
    } 
    catch (err) {
    res.status(500).json({ message: "Failed to fetch notes" })
}

})
// download function
const downloadNotesFile = asyncHandler(async(req,res)=>{
    try {
    console.log("Download ID:", req.params)
    const note = await Notes.findById(req.params.id)
    if (!note) return res.status(404).send("Note not found",req.params.id)

    const response = await axios.get(note.fileUrl, {
      responseType: "stream"
    })

    // Force browser download
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${note.title}.pdf"`
    )
    res.setHeader("Content-Type", "application/pdf")

    response.data.pipe(res)

  } catch (err) {
    console.error("DOWNLOAD ERROR:", err)
    res.status(500).send("Download failed")
  }
   
})

const downloadExpFile = asyncHandler(async(req,res)=>{
    try {
    console.log("Download ID:", req.params)
    const exp = await Exp.findById(req.params.id)
    if (!exp) return res.status(404).send("Note not found",req.params.id)

    const response = await axios.get(exp.fileUrl, {
      responseType: "stream"
    })

    // Force browser download
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${exp.title}.pdf"`
    )
    res.setHeader("Content-Type", "application/pdf")

    response.data.pipe(res)

  } catch (err) {
    console.error("DOWNLOAD ERROR:", err)
    res.status(500).send("Download failed")
  }
   
})

const downloadQpFile = asyncHandler(async(req,res)=>{
    try {
    console.log("Download ID:", req.params)
    const qp = await Qp.findById(req.params.id)
    if (!qp) return res.status(404).send("Note not found",req.params.id,qp)

    const response = await axios.get(qp.fileUrl, {
      responseType: "stream"
    })
    // Force browser download
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${qp.title}.pdf"`
    )
    res.setHeader("Content-Type", "application/pdf")

    response.data.pipe(res)

  } catch (err) {
    console.error("DOWNLOAD ERROR:", err)
    res.status(500).send("Download failed")
  }
   
})



const viewNotes = asyncHandler(async(req,res)=>{
  try {
        const notes = await Notes.find({type:"notes"}).sort({ createdAt: -1 })
      res.json(notes)
    } 
    catch (err) {
    res.status(500).json({ message: "Failed to fetch notes" })
  }
  
})
const viewQp = asyncHandler(async(req,res)=>{
  try {
        const qp = await Qp.find({type:"ques"}).sort({ createdAt: -1 })
      res.json(qp)
    } 
    catch (err) {
    res.status(500).json({ message: "Failed to fetch notes" })
  }

})
const viewExp = asyncHandler(async(req,res)=>{
   try {
        const exp = await Exp.find({type:"exp"}).sort({ createdAt: -1 })
      res.json(exp)
    } 
    catch (err) {
    res.status(500).json({ message: "Failed to fetch notes" })
  }
})
export {fileUpload,viewAllFiles,downloadNotesFile,downloadExpFile,downloadQpFile,viewNotes,viewExp,viewQp}