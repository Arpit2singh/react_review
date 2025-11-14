const { default: mongoose } = require("mongoose")


const dbLogic = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.URI}/${dbName}`)
        if(connectionInstance){
            console.log("mongodb connected") ; 
            console.log("mongodb connected at the " , connectionInstance.connection.host) ; 
            return connectionInstance ;
        }

    } catch (error) {
        throw console.error("error is occurred ") ; 
        throw error  ; 
    }
}

export default dbLogic ; 