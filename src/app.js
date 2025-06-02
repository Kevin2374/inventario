/* Importamos al framework express */
import express from "express";
import cors from "cors"
import categoriasRoutes from "./routes/categorias.routes.js"
const app = express();

app.use(cors())
app.set("port",5000)

app.use("/api/categorias",categoriasRoutes)

app.get('/',(req,res)=>{
res.send('RES API RENDER WITHOUT DATABASE ENDPOINT')
})

/* hacemos disponible a mi server app para toda la aplicacion */
export default app;