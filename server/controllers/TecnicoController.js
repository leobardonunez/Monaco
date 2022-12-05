//importamos el modelo
import TecnicoModel from "../models/TecnicoModel.js"


//Metodos del crud

//Mostrar todos los registros
export const getAll = async (req , res) =>{
    try {
        const tecnicos = await TecnicoModel.findAll();
        res.json(tecnicos);
    } catch (error) {
        res.json({message: error.message});        
    }
};


