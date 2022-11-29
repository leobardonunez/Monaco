import { pool } from "../db.js";

//Obtener tareas
export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM task ORDER BY id ASC");
    res.json(result);
    console.log(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Obtener tarea
export const getTask = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM task WHERE id = ?", [
      req.params.id,
    ]);

    if (result === 0) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Crear tarea
export const createTask = async (req, res) => {
  try {
    const { name, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO task(name,description)VALUES ('hola','comoestas')"
    );
    console.log(result);
    res.json({
      id: result.insert.Id,
      name,
      description,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
/* await pool.query('INSERT INTO entradas set ? ', [req.body]); */
/* public async create(req:Request, res: Response): Promise<void>{
    await pool.query('INSERT INTO entradas set ? ', [req.body]);
    console.log(req.body);
    res.json({text: 'creating Entrada'});

     "INSERT INTO task(name , description)VALUES(? ,?)",
    [req.body.name , req.body.description]
} */

//Actualizar tarea
export const updateTask = async (req, res) => {
  try {
    const { name, description } = req.body;
    const result = await pool.query(
      "SELECT * FROM task UPDATE task SET ? WHERE id = ?",
      [req.body, req.params.id]
    );

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Eliminar tarea
export const deleteTask = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM task WHERE id = ?",
      req.params.id
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
