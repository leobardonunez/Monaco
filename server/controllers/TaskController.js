//importamos el modelo
import TaskModel from "../models/TaskModel.js";

//Metodos del crud

//Mostrar todos los registros
export const getAll = async (req, res) => {
  try {
    const tasks = await TaskModel.findAll();
    res.json(tasks);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar un registro
export const getOne = async (req, res) => {
  try {
    const task = await TaskModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(task[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Crear un registro
export const create = async (req, res) => {
  try {
    await TaskModel.create(req.body);
    res.json({
      message: "Registro guardado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Actualizar un registro
export const update = async (req, res) => {
  try {
    await TaskModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: "Resgistro actualizado correctamente!" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Eliminar registro
export const deleteTask = async (req, res) => {
  try {
    await TaskModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "El registro se a eliminado correctamente",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};
