function CancionList({ cancion }) {
    const { nombre, interprete, tipo, link } = cancion;
    return (
      <div className="song-list">
        <h2 class="song-title">{nombre}</h2>
        <p class="song-artist">{interprete}</p>
        <p class="song-type">{tipo}</p>
      </div>
    );
  }
  
  export default CancionList;
  