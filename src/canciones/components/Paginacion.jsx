import React, { useEffect, useState } from "react";
import CancionCard from "./CancionCard";

function Paginacion({ datos, datosPorPagina }) {
  const [paginaActual, setPaginaActual] = useState(1);
  const maxPaginas = Math.ceil(datos.length / datosPorPagina);

  const indiceUltimoDato = paginaActual * datosPorPagina;
  const indicePrimerDato = indiceUltimoDato - datosPorPagina;
  const datosPaginaActual = datos.slice(indicePrimerDato, indiceUltimoDato);

  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

    useEffect(()=> {
        setPaginaActual(1);
    },[datos])

  return (
    <>
      {/* Mostrar los datos de la página actual */}

      <div className="cancion-wrapper">
        {datosPaginaActual.map((x) => (
          <CancionCard key={x.id} cancion={x} />
        ))}
      </div>

      {/* Controles de paginación */}
      <div className="controlesPaginacion">
        <button
          onClick={() => cambiarPagina(paginaActual - 1)}
          disabled={paginaActual === 1}
        >
          Anterior
        </button>

        {Array.from({ length: maxPaginas }, (_, i) => i + 1).map(
          (numeroPagina) => (
            <button
              key={numeroPagina}
              onClick={() => cambiarPagina(numeroPagina)}
              className={paginaActual === numeroPagina ? "active" : ""}
            >
              {numeroPagina}
            </button>
          )
        )}

        <button
          onClick={() => cambiarPagina(paginaActual + 1)}
          disabled={paginaActual === maxPaginas}
        >
          Siguiente
        </button>
      </div>
    </>
  );
}

export default Paginacion;
