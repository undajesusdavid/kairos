import Buscador from "./components/Buscador";
import {canciones} from "./data";
import "./canciones.css";
import {useState } from "react";
import Paginacion from "./components/Paginacion";
import { useSupabase } from "../utils/SupabaseProvider";

function Canciones() {
  const { supabase, session } = useSupabase();
  //const [canciones, setCanciones] = useState([]);
  const [resultadosBusqueda, setResultadosBusqueda] = useState(canciones);

  /*useEffect(() => {
    async function getCanciones() {
      let { data: sings } = await supabase.from("canciones").select("*");
      if (sings?.length > 1) {
        setCanciones(sings);
      }
    }

    getCanciones();
  }, []);*/

  const actualizarResultados = (resultados) => {
    setResultadosBusqueda(resultados);
  };

  if (session) {
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

  return (
    <div>
      <h1>Error de conexion con supabase</h1>
    </div>
  );
}

export default Canciones;
