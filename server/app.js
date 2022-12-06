import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import taskRouter from './routes/TaskRouter.js';
import tecnicoRouter from './routes/TecnicoRouter.js';
import estadoRouter from './routes/EstadoRouter.js';

const app = express()

app.use(cors())
app.use(express.json())
app.use('/tasks' , taskRouter) 
app.use('/tecnicos' , tecnicoRouter)
app.use('/estados' , estadoRouter)


try {
    await db.authenticate()
    console.log("Conexion exitosa a la base de datos")
} catch (error) {
    console.log("Hubo un problema con la conexion a la base de datos")
}

app.get('/' , (req, res)=>{
    res.send('Hola mundo')
})


app.listen(4000 , ()=>{
    console.log('Server on port 4000')
})