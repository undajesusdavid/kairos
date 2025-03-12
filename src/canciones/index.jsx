import "./canciones.css";
import Buscador from "./components/Buscador";
import Paginacion from "./components/Paginacion";
import { useEffect, useState } from "react";
import { getCanciones } from "../controllers/CancionesController";
import Loading from "../components/Loading";

function Canciones() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [canciones, setCanciones] = useState([]);
  const [resultadosBusqueda, setResultadosBusqueda] = useState(canciones);

  const actualizarResultados = (resultados) => {
    setResultadosBusqueda(resultados);
  };

  useEffect(() => {
    setLoading(true);
    getCanciones((data,error)=>{
      setError(error);
      setCanciones(data);
      setResultadosBusqueda(data);
      setLoading(false);
    });
  }, []);

  if(loading){
    return <Loading />
  }

  if(error){
    return <div className="sin-resultados">error de consulta con la base de datos</div>
  }

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
