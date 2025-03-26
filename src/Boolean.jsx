import React, { useState } from "react";

const Boolean = () => {
  const [numero, setNumero] = useState(0);

  const validarNumero = () => {
    return numero > 10
      ? "El número es mayor a 10"
      : "El número es menor o igual a 10";
  };

  return (
    <div>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(parseInt(e.target.value, 10))}
      />
      <p>{validarNumero()}</p>
    </div>
  );
};

export default Boolean;
