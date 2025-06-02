import { Router } from "express";
import { methodHTTP as productoController } from "../controllers/productos.controllers.js";

/* Creamos el enrutador */

const router = Router();

/* Configuramos respuesta desde server método http Get */
/* READ */
router.get("/", productoController.getProductos);
/* CREATE */
router.post("/", productoController.postProductos);
/* Ruta que recibe un parámetro (READ - una sola fila) */
router.get("/:id", productoController.getProductoById);
/* DELETE - Ruta que recibe parametro ID de categoria a borrar */
router.delete("/:id", productoController.deleteProducto);
/* UPDATE - Ruta que recibe parametro tanto el cuerpo como el ID a actualizar */
router.put("/:id", productoController.updateProducto);

/* Hacemos disponible a router en toda la app */

export default router;
