import React, { useEffect, useState } from "react";
import { getVocalistas } from "../../../controllers/VocalistasController";
function FiltroVocalista({ selected, onSelected}) {
  const [vocalistas, setVocalistas] = useState(["Todos"]);
  useEffect(() => {
    getVocalistas((data) => {
      setVocalistas(data);
    });
  }, []);

  return (
    <div className="filtro-vocalistas">
      <label for="vocalista">Vocalista </label>
      <select
        name="vocalista"
        value={selected}
        onChange={(e) => onSelected(e.target.value)}
      >
        <option value="Todos">Todos</option>
        {vocalistas.map((vocalista) => (
          <option key={vocalista.id} value={vocalista.nombre}>
            {vocalista.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FiltroVocalista;
