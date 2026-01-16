import { Router } from "express";
import {fileUpload,viewAllFiles,downloadFile,viewNotes,viewExp, viewQp} from "../controllers/file.controllers.js"
import multer from 'multer'


const router = Router();

const upload = multer({ dest: "temp/", limits: { fileSize: 100 * 1024 * 1024 },}) //50mb

// "/file/{}"
router.route("/upload").post(upload.single("pdf"),fileUpload);
router.route("/download/:id").get(downloadFile)

router.route("/viewall").get(viewAllFiles)

router.route("/viewnotes").get(viewNotes)
router.route("/viewqp").get(viewQp)
router.route("/viewexp").get(viewExp)

export default router;
