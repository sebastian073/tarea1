import React, { useState } from "react";

const String = () => {
  const [textos, setTextos] = useState(["Texto 1", "Texto 2", "Texto 3"]);

  const modificarTextos = () => {
    setTextos(["Nuevo Texto 1", "Nuevo Texto 2", "Nuevo Texto 3"]);
  };

  return (
    <div>
      {textos.map((texto, index) => (
        <p key={index}>{texto}</p>
      ))}
      <button onClick={modificarTextos}>Modificar textos</button>
    </div>
  );
};

export default String;
