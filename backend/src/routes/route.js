import { Router } from "express";
import { feedback } from "../controllers/feedback.controller.js";
import UserInfo from "../middleware/userinfo.middleware.js";


const router = Router() ; 

router.route("/Feedback").post(feedback) ;
router.route("/user").get(UserInfo , (req ,res)=>{
    res.json({
        message : "MiddleWare executed successfully" , 
        userInfo :  req.userInfo 
    })
})

export default router ; 