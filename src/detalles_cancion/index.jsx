import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCancion } from "../controllers/CancionesController";

function DetallesCancion() {
  const { id } = useParams();
  const [cancion, setCancion] = useState(null);
  
  useEffect(() => {
    getCancion(id, (data) => {
      setCancion(data);
    });
  }, []);

  if (cancion === null) {
    return <p>Cargando</p>;
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ color: "#333", marginBottom: "10px" }}>{cancion.nombre}</h2>
      <p>
        <strong>Intérprete:</strong> {cancion.interprete}
      </p>
      <p>
        <strong>Género:</strong> {cancion.genero || "No especificado"}
      </p>
      <p>
        <strong>Enlace:</strong>{" "}
        <a href={cancion.link} target="_blank" rel="noopener noreferrer">
          Ver en YouTube
        </a>
      </p>
    </div>
  );
}

export default DetallesCancion;
