/* Importamos al framework express */
import express from "express";

const app = express();

app.set("port",5000)

/* hacemos disponible a mi server app para toda la aplicacion */
export default app;