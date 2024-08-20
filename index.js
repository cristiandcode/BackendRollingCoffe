import express from "express";
import cors from "cors";
import morgan from "morgan";
import "./src/database/database.js";
import path from "path";
import { fileURLToPath } from "url";
import Productosrouter from "./src/routes/productos.routes.js";

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
//configurar que se interpreten los datos en formato json y que pueda acceder a los datos del body del request
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//configurar el archivo estatico, seria index.html
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, "/public")))
//3crear las rutas
//http://localhost:4001/prueba este es nuestra ruta pero vamos a inventar una ejemplo /prueba creamos la ruta con get

// app.get("/prueba",(req, res)=>{
// console.log("prueba de solicitud get")
// //enviar una respuesta
// res.send("desde mi backend de rolling coffee")
// })

app.use("/api", Productosrouter)