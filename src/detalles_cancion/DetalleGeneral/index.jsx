import { useNavigate, useParams } from "react-router";
import "./detalle_general.css";

function DetalleGeneral({ interprete, genero, categorias, link }) {
  const {id} = useParams();
  const navigate = useNavigate();

  return (
    <div className="detalle-general">
      <h3 className="title-general">DETALLES DE LA CANCIÓN</h3>
      <div className="detalles">
        <p className="interprete">
          <strong>Interprete: </strong>
          {interprete}
        </p>
        <p className="genero">
          <strong>Genero: </strong>
          {genero}
        </p>
        <div className="categorias">
          {categorias.map((categoria, index) => (
            <p key={index} className="categoria">
              <strong>Categorias: </strong>
              {categoria || "Sin asignar"}
            </p>
          ))}
        </div>
        <p>
          <strong>Enlace: </strong>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Escuchar en youtube
          </a>
        </p>
        <button className="btn-letra" onClick={() => navigate("/letra_ensayo/"+id) }>Letra para ensayar</button>
      </div>
    </div>
  );
}

export default DetalleGeneral;
