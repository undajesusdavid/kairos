import { canciones } from "./data";
import Buscador from "./components/Buscador";
import "./canciones.css";
import { useState } from "react";
import Paginacion from "./components/Paginacion";

function Canciones() {
  const [resultadosBusqueda, setResultadosBusqueda] = useState(canciones);

  const actualizarResultados = (resultados) => {
    setResultadosBusqueda(resultados);
  };

  return (
    <div className="canciones-root">
      <Buscador
        datos={canciones}
        onResultadosActualizados={actualizarResultados}
      />

      {resultadosBusqueda.length > 0 ? (
        <Paginacion datos={resultadosBusqueda} datosPorPagina={8} />
      ) : (
        <h2 className="sin-resultados">No se encontraron resultados.</h2>
      )}
    </div>
  );
}

export default Canciones;
