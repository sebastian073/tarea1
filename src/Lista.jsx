import React from "react";

const Lista = () => {
  const lista = ["Manzana", "Banana", "Cereza", "Durazno"];

  const mostrarLista = () => {
    alert(`Lista de elementos: ${lista.join(", ")}`);
  };

  return (
    <div>
      <button onClick={mostrarLista}>Mostrar datos de la lista</button>
    </div>
  );
};

export default Lista;
