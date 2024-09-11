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
  .post(
    [
      check("nombreProducto")
        .notEmpty()
        .withMessage("El nombre del producto es obligatorio")
        .isLength({ min: 2, max: 50 })
        .withMessage(
          "El nombre del producto debe tener entre 2 y 50 caracteres inclusive"
        ),
      check("precio")
        .notEmpty()
        .withMessage("El precio del producto es un dato obligatorio")
        .isNumeric()
        .withMessage("El precio debe ser un número")
        .custom((value) => {
          if (value >= 50 && value <= 20000) {
            return true;
          } else {
            throw new Error(
              "El precio del producto debe estar entre $50 y $20000 inclusive"
            );
          }
        }),

    ],
    crearProducto
  )
  .get(listarProductos);
router
  .route("/productos/:id")
  .get(obtenerProducto)
  .put(editarProducto)
  .delete(borrarProducto);
export default router;
