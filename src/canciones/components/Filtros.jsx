import React, { useEffect, useState } from "react";
import { getCategorias } from "../../controllers/CategoriasController";

export default function Filtros({ canciones, onResultadosPorFiltro }) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [categorias, setCategorias] = useState(["Todos"]);

  const actualizarResultados = (evento) => {
    const categoria = evento.target.value;
    setCategoriaSeleccionada(categoria);
    const cancionesFiltradas =
    categoria === "Todos"
        ? canciones
        : canciones.filter((cancion) =>
            cancion.categorias.includes(categoria)
          );

    onResultadosPorFiltro(cancionesFiltradas);
  };

  useEffect(() => {
    getCategorias((data) => {
      setCategorias(data);
    });
  }, []);

  return (
    <div className="wrapper-filtro">
      <select
        value={categoriaSeleccionada}
        onChange={actualizarResultados}
      >
         <option value="Todos">Todos</option>
        {categorias.map((categoria) => (
          <option key={categoria.id} value={categoria.nombre}>
            {categoria.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}
