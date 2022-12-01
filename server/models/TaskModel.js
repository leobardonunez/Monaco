//importamos la conexion de la db
import db from "../database/db.js";
//importamos sequelize
import {DataTypes} from 'sequelize'


const TaskModel = db.define('tasks' , {    
    name: { type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    asigned_to: {type: DataTypes.INTEGER},
    estado: {type: DataTypes.BOOLEAN}
})


/* Error de nombre de tabla y columnas (createdAt , updatedAt)
const TaskModel = db.define('tasks' , {    
    name: { type: DataTypes.STRING},
    description: {type: DataTypes.STRING}    
},
{
    timestamps: false,
    freezeYableName: true,
    tableName: tasks
}) */



export default TaskModel;
