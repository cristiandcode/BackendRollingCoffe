import mongoose from "mongoose";

console.log(process.env.MONGODB_URI)
const mongodb=process.env.MONGODB_URI;

mongoose.connect(mongodb)

const conexion = mongoose.connection;

conexion.once("open",()=>{
    console.info("BD conectada")
})

