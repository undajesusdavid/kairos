import React from "react";
import { Navigate, Route, Routes } from "react-router";

//Componentes
import Canciones from "../canciones/index.jsx";
import DetallesCancion from "../detalles_cancion/index.jsx";
import LetraEnsayo from "../letra_ensayo/index.jsx";

function ComponentRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/canciones" }/>} />
      <Route path="/canciones" element={<Canciones />} />
      <Route path="/canciones/detalle/:id" element={<DetallesCancion />} />
      <Route path="/canciones/letra_ensayo/:id" element={<LetraEnsayo />} />
    </Routes>
  );
}

export default ComponentRoutes;
