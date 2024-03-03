import {Router} from "express";
import { registerUser } from "../controllers/userController.js";
import { upload } from "../middlewares/multerMiddleware.js";

const router = Router()

// here we are injecting meddleware to upload files
router.route("/register").post(upload.fields([
  {
    name: "avatar",
    maxCount: 1
  },
  {
    name: "coverImage",
    maxCount: 1
  }]
), registerUser)
// router.route("/login").post()
export default router