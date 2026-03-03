import { Router } from "express";
import {fileUpload,viewAllFiles,downloadNotesFile,downloadQpFile,downloadExpFile,viewNotes,viewExp, viewQp,viewNotesFile,viewQpFile,viewExpFile,deleteNotesFile,deleteExpFile,deleteQpFile,NoteLengthDB,ExpLengthDB,QpLengthDB,UserLengthDB,totalNotesSubjectUploads,latestUploads} from "../controllers/file.controllers.js"
import multer from 'multer'
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router();

const upload = multer({ dest: "temp/", limits: { fileSize: 100 * 1024 * 1024 },}) //50mb
// "/file/{}"
router.route("/upload").post(verifyJWT,upload.single("pdf"),fileUpload);
// /file/{notes}/download/:id
router.route("/notes/download/:id").get(downloadNotesFile)
router.route("/exp/download/:id").get(downloadExpFile)
router.route("/qp/download/:id").get(downloadQpFile)
// /file/{notes}/view/:id
router.route("/notes/view/:id").get(viewNotesFile)
router.route("/qp/view/:id").get(viewQpFile)
router.route("/exp/view/:id").get(viewExpFile)
// /file/{notes}/delete/:id
router.route("/notes/delete/:id").delete(deleteNotesFile)
router.route("/exp/delete/:id").delete(deleteExpFile)
router.route("/qp/delete/:id").delete(deleteQpFile)

router.route("/viewall").get(viewAllFiles)
// /file/viewnotes
router.route("/viewnotes").get(verifyJWT,viewNotes)
router.route("/viewqp").get(verifyJWT,viewQp)
router.route("/viewexp").get(verifyJWT,viewExp)
// file/{notes}/count
router.route("/notes/count").get(NoteLengthDB)
router.route("/exp/count").get(ExpLengthDB)
router.route("/qp/count").get(QpLengthDB)
router.route("/user/count").get(UserLengthDB)
// file/notes/sub/count
router.route("/notes/sub/count").get(totalNotesSubjectUploads);
// file/notes/latest
router.route("/notes/latest").get(latestUploads);

export default router;
