import React from "react";

const Objeto = () => {
  const objeto = { nombre: "Juan", edad: 25, ocupacion: "Ingeniero" };

  const mostrarDatos = () => {
    alert(
      `Nombre: ${objeto.nombre}, Edad: ${objeto.edad}, Ocupación: ${objeto.ocupacion}`
    );
  };

  return (
    <div>
      <button onClick={mostrarDatos}>Mostrar datos del objeto</button>
    </div>
  );
};

export default Objeto;
