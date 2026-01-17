import { Router } from "express";
import {fileUpload,viewAllFiles,downloadNotesFile,downloadQpFile,downloadExpFile,viewNotes,viewExp, viewQp} from "../controllers/file.controllers.js"
import multer from 'multer'


const router = Router();

const upload = multer({ dest: "temp/", limits: { fileSize: 100 * 1024 * 1024 },}) //50mb
// "/file/{}"
router.route("/upload").post(upload.single("pdf"),fileUpload);
// /file/notes/download/:id
router.route("/notes/download/:id").get(downloadNotesFile)
router.route("/exp/download/:id").get(downloadExpFile)
router.route("/qp/download/:id").get(downloadQpFile)

router.route("/viewall").get(viewAllFiles)

router.route("/viewnotes").get(viewNotes)
router.route("/viewqp").get(viewQp)
router.route("/viewexp").get(viewExp)

export default router;
