import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  const [result] = await pool.query(
    'SELECT * FROM `task`'
  );

  console.log(result)
};

export const getTask = (req, res) => {
  res.send("obteniendo tarea");
  console.log("Obteniendo tarea");
};

export const createTask = async (req, res) => {
  const { name, description } = req.body;  
  const [result] = await pool.query(
    "INSERT INTO task(name , description)VALUES(? ,?)",
    [req.body.name , req.body.description]
  );
  console.log(result)
  res.json({
    id: result.insert.Id,
    name,
    description,
  });
};
/* await pool.query('INSERT INTO entradas set ? ', [req.body]); */
/* public async create(req:Request, res: Response): Promise<void>{
    await pool.query('INSERT INTO entradas set ? ', [req.body]);
    console.log(req.body);
    res.json({text: 'creating Entrada'});
} */

export const updateTask = (req, res) => {
  res.send("actualizando tarea");
  console.log("Actualizando tarea");
};

export const deleteTask = (req, res) => {
  res.send("eliminando tarea");
  console.log("Eliminando tarea");
};
