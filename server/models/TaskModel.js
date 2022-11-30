//importamos la conexion de la db
import db from "../database/db.js";
//importamos sequelize
import {DataTypes} from 'sequelize'


const TaskModel = db.define('task' , {
    name: { type: DataTypes.STRING},
    description: {type: DataTypes.STRING}
})

export default TaskModel;