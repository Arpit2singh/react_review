import { Router } from "express";
import { feedback } from "../controllers/feedback.controller.js";


const router = Router() ; 

router.route("/Feedback").post(feedback) ;

export default router ; 