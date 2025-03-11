import "./canciones.css";
import Buscador from "./components/Buscador";
import Paginacion from "./components/Paginacion";
import { useEffect, useState } from "react";
import { getCanciones } from "../controllers/CancionesController";

function Canciones() {
  const [canciones, setCanciones] = useState([]);
  const [resultadosBusqueda, setResultadosBusqueda] = useState(canciones);

  const actualizarResultados = (resultados) => {
    setResultadosBusqueda(resultados);
  };

  useEffect(() => {
    getCanciones((data)=>{
      setCanciones(data);
      setResultadosBusqueda(data);
    });
  }, []);

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
