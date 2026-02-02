import { Router } from "express";
import { registerUser , loginUser,getUserDetails} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

router.route("/profile").get(verifyJWT,getUserDetails) 
// get method is used when we are reterieving the data from the server

//secured routes

export default router;