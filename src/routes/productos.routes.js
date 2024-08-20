import { Router } from "express";
import { listarProductos } from "../controllers/productos.controllers.js";
const router = Router();

//Crear las rutas
router.route("/prueba").get(listarProductos);

    export default router