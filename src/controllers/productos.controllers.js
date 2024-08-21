import Producto from "../database/models/producto.js"

export const listarProductos = (req, res)=>{
    console.log("prueba de solicitud get")
    //enviar una respuesta
    res.send("desde mi backend de rolling coffee")
    }
export const crearProducto = (req, res)=>{
//Validar los datos del producto -- Estos datos vienen del body
//le vamos a pedir a la base de datos crear el producto
//enviar la respuesta de lo sucedido, si funcionó o falló

    }