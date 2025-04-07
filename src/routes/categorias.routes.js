import {Router} from "express"
import { methodHTPP as categoriaController } from "../controllers/categoria.controllers.js";
const router  = Router();

router.get("/", categoriaController.getCategorias) 

export default router ;