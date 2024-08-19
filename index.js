import express from "express";
import cors from "cors";
import morgan from "morgan";

//1- pedir el puerto
const app= express();
//creamos una variable
app.set("port",process.env.PORT || 4000)
app.listen(app.get("port"),()=>{
console.info("Estoy escuchando el puerto:" +app.get("port") )
})

//2- configurar middlewares
app.use(cors())//Permitir conexiones remotas
app.use(morgan("dev")) //datos extras en la terminal con morgan
//configurar el archivo estatico, seria index.html
//configurar que se interpreten los datos en formato json y que pueda acceder a los datos del body del request