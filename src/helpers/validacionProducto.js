import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";
const validacionProducto = [
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
  check("imagen")
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio")
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/)
    .withMessage(
      "La imagen debe ser una url valida y debe terminar en los isguientes formatos jpg|jpeg|gif|png"
    ),
  check("categoria")
    .notEmpty()
    .withMessage("La categoria es un dato obligatorio")
    .isIn(["Infusiones", "Batidos", "Dulce", "Salado", "Sandwich"])
    .withMessage(
      "La categoria debe ser una de las siguientes opciones: ('Infusiones', 'Batidos', 'Dulce', 'Salado', 'Sandwich') Corrobora que utilizaste bien las mayusculas"
    ),
  check("descripcion_breve")
    .notEmpty()
    .withMessage("La descripcion breve es un dato obligatorio")
    .isLength({ min: 5, max: 100 })
    .withMessage("La descripcion breve debe tener entre 5 y 100 caracteres"),
  check("descripcion_amplia")
    .notEmpty()
    .withMessage("La descripcion amplia es un dato obligatorio")
    .isLength({ min: 30, max: 500 })
    .withMessage("La descripcion amplia debe tener entre 30 y 500 caracteres"),
  //Aqui llamo a resultado de la validacion
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionProducto;
