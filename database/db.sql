CREATE TABLE tasks (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    description VARCHAR(300),  
    asigned_to INTEGER NOT NULL,
    state BOOLEAN NOT NULL DEFAULT 0,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

    asigned_to INTEGER NOT NULL,
    state BOOLEAN NOT NULL DEFAULT 0,
     created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP

    INSERT INTO tasks(name , description , asigned_to , state) VALUES("Mi primer tarea" , "Dar mantenimiento a wm 1011" , 1 , 0);