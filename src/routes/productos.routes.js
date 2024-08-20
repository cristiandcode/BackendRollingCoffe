import { Router } from "express";

const router = Router();

//Crear las rutas
router.route("/prueba").get((req, res)=>{
    console.log("prueba de solicitud get")
    //enviar una respuesta
    res.send("desde mi backend de rolling coffee")
    })

    export default router