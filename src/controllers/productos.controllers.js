import Producto from "../database/models/producto.js"

export const listarProductos = async (req, res)=>{
    console.log("prueba de solicitud get")
    //enviar una respuesta
    res.send("desde mi backend de rolling coffee")
    }
export const crearProducto = async (req, res)=>{
    try{
 //Validar los datos del producto -- Estos datos vienen del body
//le vamos a pedir a la base de datos crear el producto
 console.log(req.body);
 const productoNuevo = new Producto(req.body)
 await productoNuevo.save();
//enviar la respuesta de lo sucedido, si funcionó o falló
    res.status(201).json({mensaje: "El producto fue creado correctamente"})
    }catch(error){
        console.error(error)
        res.status(500) .json({
            mensaje: "Ocurrio un error y no se pudo crear el producto."
        });
    }
};