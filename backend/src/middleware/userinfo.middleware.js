import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import requestIp from "request-ip"
import {UAParser} from "ua-parser-js";
const UserInfo = asyncHandler(async(req , res , next)=>{

    try {

     const clientIp = requestIp.getClientIp(req); 
     const userAgent = req.headers["user-agent"]
    const deviceInfo = new UAParser(userAgent).getResult();

         const userInfo = {
           ip: clientIp,
      location: "Location lookup not implemented yet", // We'll add IP lookup later
      operating: deviceInfo.os.name + " " + deviceInfo.os.version,
      browser: deviceInfo.browser.name + " " + deviceInfo.browser.version,
      device: deviceInfo.device.type || "desktop"
         }
         //after getting teh information print it on the console 
     
      console.log("===== User Info =====");
    console.log(userInfo);
    console.log("=====================");
    
    req.userInfo = userInfo 
        next()
    } catch (error) {
        throw new ApiError(401 , "caanot get teh information from thte user")
    }

})


export default UserInfo ; 