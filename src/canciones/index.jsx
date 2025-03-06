import { canciones } from "./data";
import CancionCard from "./components/CancionCard";
import Buscador from "./components/Buscador";
import "./canciones.css";
import { useState } from "react";

function Canciones() {

  const [resultadosBusqueda, setResultadosBusqueda] = useState(canciones);

  const actualizarResultados = (resultados) => {
    setResultadosBusqueda(resultados);
  };

  return (
    <div className="canciones-root">
      <Buscador datos={canciones} onResultadosActualizados={actualizarResultados} />
      <div className="cancion-wrapper">
        {resultadosBusqueda.map((x) => (
          <CancionCard key={x.id} cancion={x} />
        ))}
      </div>
      ;
    </div>
  );
}

export default Canciones;
