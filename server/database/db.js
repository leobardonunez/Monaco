import {Sequelize} from 'sequelize';


const db = new Sequelize('monaco' , 'root' , '',{
    host: 'localhost',
    dialect: 'mysql'
})


export default db;