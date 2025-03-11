import { useParams } from "react-router-dom";
import { useSupabase } from "../utils/SupabaseProvider";
import { useEffect, useState } from "react";

function DetallesCancion() {
  const { supabase } = useSupabase();
  const { id } = useParams();
  const [cancion, setCancion] = useState(null);

  const getCancion = async () => {
    const { data } = await supabase
      .from("canciones")
      .select("id,nombre,interpretes(nombre),link,generos(nombre)")
      .eq("id", id);
    setCancion(data[0]);
  };

  useEffect(() => {
    getCancion();
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
        <strong>Intérprete:</strong> {cancion.interpretes.nombre}
      </p>
      <p>
        <strong>Género:</strong> {cancion.generos.nombre || "No especificado"}
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
