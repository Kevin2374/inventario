import {Router} from "express"
import { methodHTPP as categoriaController } from "../controllers/categoria.controllers.js";
const router  = Router();

router.get("/", categoriaController.getCategorias) //para crud - Read
router.post("/", categoriaController.postCategorias) //para crud - Create

//ruta que recibe un parametro
router.get("/:id", categoriaController.getCategory) //para crud - read 1 sola fila

//ruta que recibe parametro id de categoria a borrar
router.delete("/:id", categoriaController.deleteCategory) //para crud - delete 1 sola fila

//ruta que recibe como parametro tanto el cuerpo del id a actualizar
router.put("/:id", categoriaController.updateCategorias) //para crud - delete 1 sola fila


export default router ;