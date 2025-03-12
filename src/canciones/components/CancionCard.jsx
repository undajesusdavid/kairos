import { useNavigate } from "react-router-dom";

function CancionCard({ cancion }) {
  const { id, nombre, interprete } = cancion;
  const navigate = useNavigate();
  const cargarDetalles = () => {
    navigate("/canciones/detalle/" + id);
  };

  return (
    <div className="song-card" onClick={cargarDetalles}>
      <h2 class="song-title">{nombre}</h2>
      <p class="song-artist">{interprete}</p>
    </div>
  );
}

export default CancionCard;
