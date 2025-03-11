import { useState } from "react";

function Buscador({ datos, onResultadosActualizados }) {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  const manejarCambioBusqueda = (evento) => {
    const termino = evento.target.value;
    setTerminoBusqueda(termino);

    const resultadosFiltrados = datos.filter(
      (dato) =>
        dato.nombre.toLowerCase().includes(termino.toLowerCase()) ||
        dato.interpretes.nombre.toLowerCase().includes(termino.toLowerCase())
    );
    onResultadosActualizados(resultadosFiltrados);
  };

  return (
    <div className="wrapper-buscador">
      <input
        type="text"
        placeholder="Buscar canción"
        value={terminoBusqueda}
        onChange={manejarCambioBusqueda}
        className="input-buscar"
      />
    </div>
  );
}

export default Buscador;
