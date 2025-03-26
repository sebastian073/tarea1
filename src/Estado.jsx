import React, { useState } from "react";

const Estado = () => {
  const [color, setColor] = useState("white");

  const cambiarColor = () => {
    const nuevoColor = color === "white" ? "lightblue" : "white";
    setColor(nuevoColor);
  };

  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <button onClick={cambiarColor}>Cambiar color de fondo</button>
    </div>
  );
};