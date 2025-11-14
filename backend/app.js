import express from "express" ; 
import router from "./src/routes/route.js";
const app = express() ; 



app.use(cors({
    origin : process.env.CORS_ORIGIN ,
    credentials : true 
}))
app.use("/portfolio" , router) ;





export default app ; 