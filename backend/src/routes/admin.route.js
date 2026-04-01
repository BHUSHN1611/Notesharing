import { Router } from "express";
import {getAllNotes, getAllUser, getAllExp,getAllQp }from "../controllers/admin.controller.js";

const router = Router();

router.route("/getalluser").get(getAllUser)
router.route("/getallnotes").get(getAllNotes)
router.route("/getallqp").get(getAllQp)
router.route("/getallexp").get(getAllExp)
export default router;