import "./detalles_cancion.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCancion } from "../controllers/CancionesController";
import Encabezado from "./Encabezado";
import DetalleGeneral from "./DetalleGeneral";
import DetalleVocalistas from "./DetalleVocalistas";
import Loading from "../components/Loading";

function DetallesCancion() {
  const { id } = useParams();
  const [cancion, setCancion] = useState(null);

  useEffect(() => {
    getCancion(id, (data) => {
      setCancion(data);
    });
  }, []);

  if (cancion === null) {
    return <Loading />;
  }

  return (
    <div className="root-detalles">
      <Encabezado title={cancion.nombre} />
      <DetalleGeneral
        interprete={cancion.interprete}
        genero={cancion.genero}
        categorias={cancion.categorias}
        link={cancion.link}
      />
      <DetalleVocalistas vocalistas={cancion.vocalistas} />
    </div>
  );
}

export default DetallesCancion;
