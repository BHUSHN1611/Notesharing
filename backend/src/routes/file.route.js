import { Router } from "express";
import {fileUpload,viewAllFiles,downloadNotesFile,downloadQpFile,downloadExpFile,viewNotes,viewExp, viewQp,viewNotesFile,viewQpFile,viewExpFile,deleteNotesFile,deleteExpFile,deleteQpFile,} from "../controllers/file.controllers.js"
import multer from 'multer'
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router();

const upload = multer({ dest: "temp/", limits: { fileSize: 100 * 1024 * 1024 },}) //50mb
// "/file/{}"
router.route("/upload").post(verifyJWT,upload.single("pdf"),fileUpload);
// /file/notes/download/:id
router.route("/notes/download/:id").get(downloadNotesFile)
router.route("/exp/download/:id").get(downloadExpFile)
router.route("/qp/download/:id").get(downloadQpFile)
// /file/notes/view/:id
router.route("/notes/view/:id").get(viewNotesFile)
router.route("/qp/view/:id").get(viewQpFile)
router.route("/exp/view/:id").get(viewExpFile)
// /file/notes/delete/:id
router.route("/notes/delete/:id").delete(deleteNotesFile)
router.route("/exp/delete/:id").delete(deleteExpFile)
router.route("/qp/delete/:id").delete(deleteQpFile)

router.route("/viewall").get(viewAllFiles)

router.route("/viewnotes").get(viewNotes)
router.route("/viewqp").get(viewQp)
router.route("/viewexp").get(viewExp)



export default router;
