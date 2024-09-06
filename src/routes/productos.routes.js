import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers.js";
import { check } from "express-validator";
const router = Router();
check;
//Crear las rutas
router.route("/prueba").get(listarProductos);
router
  .route("/productos")
  .post([check("nombreProducto").notEmpty()], crearProducto)
  .get(listarProductos);
router
  .route("/productos/:id")
  .get(obtenerProducto)
  .put(editarProducto)
  .delete(borrarProducto);
export default router;
