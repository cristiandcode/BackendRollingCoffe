import { Router } from "express";
import { crearProducto, listarProductos, obtenerProducto } from "../controllers/productos.controllers.js";
const router = Router();

//Crear las rutas
router.route("/prueba").get(listarProductos);
router.route("/productos").post(crearProducto).get(listarProductos);
router.route("/productos/:id").get(obtenerProducto)
export default router