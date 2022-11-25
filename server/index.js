import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/task.routes.js";
const app = express();

//Procesa los datos que vienen del cliente y lo recibe como json
app.use(express.json())

app.use(indexRoutes);
app.use(taskRoutes);

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`); 