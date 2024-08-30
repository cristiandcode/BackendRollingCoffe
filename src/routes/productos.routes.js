import { Router } from "express";
import { crearProducto, editarProducto, listarProductos, obtenerProducto } from "../controllers/productos.controllers.js";
const router = Router();

//Crear las rutas
router.route("/prueba").get(listarProductos);
router.route("/productos").post(crearProducto).get(listarProductos);
router.route("/productos/:id").get(obtenerProducto).put(editarProducto);
export default router