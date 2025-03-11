import "./detalle_vocalistas.css";

function DetalleVocalistas({ vocalistas }) {
  return (
    <div className="detalle-vocalistas">
      <h3 className="title-vocalistas">DETALLES DE VOCALISTAS</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tonalidad</th>
          </tr>
        </thead>
        <tbody>
          {vocalistas.map((vocalista,index) => (
            <tr key={index}>
              <td>{vocalista.nombre}</td>
              <td>{vocalista.tonalidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DetalleVocalistas;
