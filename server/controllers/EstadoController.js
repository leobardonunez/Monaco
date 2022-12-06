//importamos el modelo
import EstadoModel from '../models/EstadoModel.js';


//Metodos del crud

//Mostrar todos los registros
export const getAll = async (req, res)=>{
    try {
        const etsados = await EstadoModel.findAll();
        res.json(estados);
    } catch (error) {
        res.json({message: error.message});
    }
};

