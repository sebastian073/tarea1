import React from "react";
import Estado from "./Estado";
import String from "./String";
import Boolean from "./Boolean";
import Objeto from "./Objeto";
import Lista from "./Lista";
import Clase from "./Clase";

const App = () => {
  const marcas = [
    {
      nombre: "Harley-Davidson",
      descripcion: "Icónica marca estadounidense de motocicletas.",
      imagen:
        "https://cdn.iconscout.com/icon/free/png-256/free-harley-2-282286.png",
    },
    {
      nombre: "Yamaha",
      descripcion: "Marca japonesa conocida por su innovación.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfHrBzhTYHIDrGLVg0Fz0o7YJKIy-BjY_7Q&s",
    },
    {
      nombre: "Ducati",
      descripcion: "Marca italiana famosa por su diseño y velocidad.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB2ozPekAVPDh1GC5WBEVZYvhya-DaDA-7Hw&s",
    },
    {
      nombre: "Kawasaki",
      descripcion: "Conocida por sus motos deportivas y de alto rendimiento.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM4g4cyAqJTCg4R2fIaAFdmCBCYJXdswTSyA&s",
    },
    {
      nombre: "BMW Motorrad",
      descripcion: "Fabricante alemán de motos de lujo.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mXG_JETG4ai64ltnMLDWhYDN1UtxHaxS0Q&s",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <header>
        <h1 className="text-4xl font-bold mb-6 text-blue-800">
          Marcas de Motos
        </h1>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {marcas.map((marca, index) => (
          <article
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={marca.imagen}
              alt={`Logo de ${marca.nombre}`}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {marca.nombre}
              </h2>
              <p className="text-gray-600 text-sm">{marca.descripcion}</p>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 text-sm font-bold hover:bg-blue-600 transition duration-500">
              Saber más
            </button>
          </article>
        ))}
      </section>

      <section className="w-full bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-gray-700">
          Componentes Interactivos
        </h2>
        <div className="space-y-6">
          <Estado />
          <String />
          <Boolean />
          <Objeto />
          <Lista />
          <Clase />
        </div>
      </section>
    </div>
  );
};

export default App;
