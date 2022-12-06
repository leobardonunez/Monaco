//importamos la conexion a la db
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";


const EstadoModel = db.define('estados' , {
    campo: {type: DataTypes.BOOLEAN},
    name:  {type: DataTypes.STRING}
})


export default EstadoModel;