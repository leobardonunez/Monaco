import axios from "axios";
import React, { useEffect, useState } from "react";

const URI = "http://localhost:4000/tecnicos/";

const SelectTecnicos = (props) => {
  const [tecnico, setTecnico] = useState([]);  
  useEffect(() => {
    getTecnicos();
  }, []);

  //Mostrar todos los tecnicos
  const getTecnicos = async () => {
    const res = await axios.get(URI);
    setTecnico(res.data);
    console.log("Estos son los tecnicos: " + res.data);
  };

  return (
    <>
      <select className="form-select">
        {tecnico.map((tecnico) => (
          <option key={tecnico.id} id_select={tecnico.id}>{tecnico.nombre}</option>
        
        ))}        
      </select>                  
    </>
  );
};

export default SelectTecnicos;
