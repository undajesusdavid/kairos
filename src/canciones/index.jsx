import Buscador from "./components/Buscador";
//import {canciones} from "./data";
import "./canciones.css";
import { useEffect, useState } from "react";
import Paginacion from "./components/Paginacion";
import { useSupabase } from "../utils/SupabaseProvider";

function Canciones() {
  const {supabase} = useSupabase();
  const [canciones, setCanciones] = useState([]);
  const [resultadosBusqueda, setResultadosBusqueda] = useState(canciones);

  const actualizarResultados = (resultados) => {
    setResultadosBusqueda(resultados);
  };

  const getCanciones = async () => {
    let { data } = await supabase
      .from("canciones")
      .select("id,nombre,interpretes(id,nombre)");
    if (data.length > 0) {
      setCanciones(data);
      setResultadosBusqueda(data);
      console.log(data)
    }
  };

  useEffect(() => {
    getCanciones();
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
