import React, { useEffect, useState } from "react";
import { getCategorias } from "../../../controllers/CategoriasController";

function Filtros({ selected, onSelected }) {
  const [categorias, setCategorias] = useState(["Todos"]);

  useEffect(() => {
    getCategorias((data) => {
      setCategorias(data);
    });
  }, []);

  return (
    <div>
      <label for="categoria">Categoria </label>
      <select
        name="categoria"
        value={selected}
        onChange={(e) => onSelected(e.target.value)}
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
export default Filtros;
