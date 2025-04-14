/* Importamos al framework express */
import express from "express";
import cors from "cors"
import categoriasRoutes from "./routes/categorias.routes.js"
const app = express();

app.use(cors())
app.set("port",5000)

app.use("/api/categorias",categoriasRoutes)
/* hacemos disponible a mi server app para toda la aplicacion */
export default app;