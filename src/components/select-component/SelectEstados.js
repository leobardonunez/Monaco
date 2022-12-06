import React, { useEffect, useState } from "react";
import axios from "axios";

const URI ="http://localhost/estados";

const SelectEstados = (props) => {
  const [estado , setEstados] = useState([]);
  useEffect(()=>{
    getEstados();
  } , [])


  //Mostrar todos los estados
  const getEstados = async ()=>{
    const res = await axios.get(URI);
    setEstados(res.data);
    console.log("Estos son los estados: " + res.data);
  };

  return (
    <>
      <select className="form-select">
        {estado.map((estado)=>(
          <option key={estado.id}>{estado.name}</option>
        ))}
      </select>
    </>
  );
};

export default SelectEstados;
