import { Router } from "express";
import { crearProducto, listarProductos } from "../controllers/productos.controllers.js";
const router = Router();

//Crear las rutas
router.route("/prueba").get(listarProductos);
export default router
router.route("/productos").post(crearProducto)