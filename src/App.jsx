import { Route, Routes } from "react-router";
import "./App.css";
import Canciones from "./canciones/index.jsx";
import DetallesCancion from "./detalles_cancion/index.jsx";

function App() {
  return (
    <>
      <header className="header-app">
        {/* <img className="logo" src={logo} alt="Iglesia del Evangelio cuadrangular" /> */}
        <h1 className="title-app">REPERTORIO KAIROS</h1>
      </header>
      <section className="main-app">
        <Routes>
          <Route path="/" element={<Canciones />} />
          <Route path="/detalles/:id" element={<DetallesCancion />} />
        </Routes>
      </section>
      <footer className="footer-app">
        <h2>IGLESIA CUADRANGULAR ACARIGUA - 2025 </h2>
      </footer>
    </>
  );
}

export default App;
