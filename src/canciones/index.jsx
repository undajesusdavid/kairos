import Buscador from "./components/Buscador";
import {canciones} from "./data";
import "./canciones.css";
import {useState } from "react";
import Paginacion from "./components/Paginacion";
//import supabase from "../utils/supabase";

function Canciones() {
  /*const [canciones, setCanciones] = useState([]);*/
  const [resultadosBusqueda, setResultadosBusqueda] = useState(canciones);

 /* useEffect(() => {
    async function getCanciones() {
      const { data: canciones } = await supabase.from("canciones").select();

      if (canciones.length > 1) {
        setCanciones(canciones);
      }
    }

    getCanciones();
  }, []);*/

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
