import { useNavigate } from "react-router-dom";

function CancionCard({ cancion }) {
  const { id, nombre, interpretes: interprete } = cancion;
  const navigate = useNavigate();
  const cargarDetalles = () => {
    navigate("/detalles/" + id);
  };

  return (
    <div className="song-card" onClick={cargarDetalles}>
      <h2 class="song-title">{nombre}</h2>
      <p class="song-artist">{interprete.nombre}</p>
    </div>
  );
}

export default CancionCard;
