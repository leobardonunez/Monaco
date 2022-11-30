CREATE TABLE task (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    description VARCHAR(300),
      createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

    asigned_to INTEGER NOT NULL,
    state BOOLEAN NOT NULL DEFAULT 0,
     createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP

    INSERT INTO task(id , name , description  , createAt) VALUES("Mi primer tarea" , "Dar mantenimiento a wm 1011");