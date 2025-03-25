import "./canciones.css";
import Buscador from "./components/Buscador";
import Paginacion from "./components/Paginacion";
import { useEffect, useState } from "react";
import { getCanciones } from "../controllers/CancionesController";
import Loading from "../components/Loading";
import { FaFilter } from "react-icons/fa";
import Filtros from "./components/Filtros";

function Canciones() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [canciones, setCanciones] = useState([]);
  const [resultadosBusqueda, setResultadosBusqueda] = useState(canciones);
  const [resultadosFiltro, setResultadosFiltro] = useState(canciones)

  const resultadosPorBusqueda = (resultados) => {
    setResultadosBusqueda(resultados);
  };

  const resultadosPorFiltros = (resultados) => {
    setResultadosFiltro(resultados);
    setResultadosBusqueda(resultados);
  }

  useEffect(() => {
    setLoading(true);
    getCanciones((data, error) => {
      setError(error);
      setCanciones(data);
      setResultadosFiltro(data)
      setResultadosBusqueda(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="sin-resultados">
        error de consulta con la base de datos
      </div>
    );
  }

  return (
    <div className="canciones-root">
      <div className="barra-tools">
        <Buscador
          datos={resultadosFiltro}
          onResultadosActualizados={resultadosPorBusqueda}
        />
        <div className="filtros" onClick={() => setShowFilters((old) => !old)}>
          <FaFilter />
        </div>
      </div>

      {resultadosBusqueda.length > 0 ? (
        <Paginacion datos={resultadosBusqueda} datosPorPagina={10} />
      ) : (
        <h2 className="sin-resultados">No se encontraron resultados.</h2>
      )}
      <Filtros
        show={showFilters}
        onClose={() => setShowFilters((old) => !old)}
        canciones={canciones}
        onResult={resultadosPorFiltros}
       
      />
    </div>
  );
}

export default Canciones;
