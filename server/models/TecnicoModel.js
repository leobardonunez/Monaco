//importamos la conexion de la db
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";



const TecnicoModel = db.define('tecnicos' ,{
    nombre: {type: DataTypes.STRING},
    apellidos: {type: DataTypes.STRING},
    puesto: {type: DataTypes.STRING}        
})


export default TecnicoModel;