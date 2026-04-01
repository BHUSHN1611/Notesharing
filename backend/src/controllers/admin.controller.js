
import { User } from '../models/user.model.js';
import { asyncHandler } from "../utils/async-handler.js";

import {Notes} from "../models/notes.model.js"
import { Qp } from "../models/qp.model.js"
import { Exp } from "../models/exp.model.js"

const getAll = (model) => asyncHandler(async(req,res)=>{
  try {
        const allUser = await model.find()
      res.json(allUser)
    } 
    catch (err) {
    res.status(500).json({ message: "Failed to fetch files" })
  }
})
const getAllUser = getAll(User);
const getAllNotes = getAll(Notes);
const getAllQp = getAll(Qp)
const getAllExp = getAll(Exp)

export {
    getAllUser,
    getAllNotes,
    getAllQp,
    getAllExp
}