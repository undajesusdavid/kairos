import "./encabezado.css";

function Encabezado({title}) {
    return (<div className="detalle-encabezado">
        <h2 className="title-song">{title}</h2>
    </div>);
}

export default Encabezado;