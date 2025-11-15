import express, { urlencoded } from "express" ; 
import router from "./src/routes/route.js";
import cors from "cors"
const app = express() ; 
app.use(cors({
    origin : process.env.CORS_ORIGIN ,
    credentials : true 
}))
app.use(express.urlencoded({extended : true  , limit : "16kb"})) ; 
app.use(express.json({limit : "16kb"})) 


app.use("/portfolio" , router) ;





export default app ; 