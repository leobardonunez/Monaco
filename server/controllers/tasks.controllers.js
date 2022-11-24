export const getTasks =(req, res) =>{
    res.send('obteniendo tareas')
    console.log("Obteniendo tareas")    
}

export const getTask =(req, res) =>{
    res.send('obteniendo tarea')
    console.log("Obteniendo tarea")
}

export const createTask =(req, res) =>{
    res.send('creando tarea')
    console.log("Creando tarea")
}

export const updateTask =(req, res) =>{
    res.send('actualizando tarea')
    console.log("Actualizando tarea")
}

export const deleteTask =(req, res) =>{
    res.send('eliminando tarea')
    console.log("Eliminando tarea")
}