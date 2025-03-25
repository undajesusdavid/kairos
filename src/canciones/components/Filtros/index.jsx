import React, { useState } from "react";
import "./filtros.css";
import Modal from "../../../components/Modal";
import FiltroCategoria from "./FiltroCategoria";
import FiltroVocalista from "./FiltroVocalista";

const defaultValue = "Todos";

function Filtros({ show, onClose, canciones, onResult }) {
  const [categoria, setCategoria] = useState(defaultValue);
  const [vocalista, setVocalista] = useState(defaultValue);

  const resetFilters = () => {
    setCategoria(defaultValue);
    setVocalista(defaultValue);
    onResult(canciones);
    onClose();
  };

  const filtroPorCategoria = (anterior) => {
    return anterior.filter((x) => x.categorias.includes(categoria));
  };

  const filtroPorVocalista = (anterior) => {
    return anterior.filter((x) => x.vocalistas.includes(vocalista));
  };

  const filtrar = () => {
    const porCategoria =
      categoria === defaultValue ? canciones : filtroPorCategoria(canciones);
    const porVocalista =
      vocalista === defaultValue
        ? porCategoria
        : filtroPorVocalista(porCategoria);
    onResult(porVocalista);
    onClose();
  };

  return (
    <Modal
      isOpen={show}
      onClose={onClose}
      title="Filtro de canciones"
      overlayClose={false}
    >
      <div className="wrapper-filtros">
        <FiltroCategoria
          selected={categoria}
          onSelected={(value) => setCategoria(value)}
        />
        <FiltroVocalista
          selected={vocalista}
          onSelected={(value) => setVocalista(value)}
        />
      </div>
      <div className="wrapper-buttons-filter">
        <button onClick={() => filtrar()}>Aplicar</button>
        <button onClick={resetFilters}>Resetear</button>
        <button onClick={() => onClose()}>Cancelar</button>
      </div>
    </Modal>
  );
}

export default Filtros;
