import { Route, Routes } from "react-router";
import "./App.css";
import Canciones from "./canciones/index.jsx";
import DetallesCancion from "./detalles_cancion/index.jsx";
import { useSupabase } from "./utils/SupabaseProvider.jsx";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/index.jsx";
import LetraEnsayo from "./letra_ensayo/index.jsx";

function App() {
  const { session, hanldeSignIn } = useSupabase();
  const [autenticado, setAutenticado] = useState(false);

  async function login() {
    setAutenticado(
      await hanldeSignIn("undajesusdavid@gmail.com", "Kaimegansusej95*")
    );
  }
  useEffect(() => {
    if (!session) {
      login();
    }
  }, []);

  return (
    <>
      <header className="header-app">
        {/* <img className="logo" src={logo} alt="Iglesia del Evangelio cuadrangular" /> */}
        <h1 className="title-app">REPERTORIO KAIROS</h1>
      </header>
      <section className="main-app">
        {autenticado === false ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<Canciones />} />
            <Route path="/detalles/:id" element={<DetallesCancion />} />
            <Route path="/letra_ensayo/:id" element={<LetraEnsayo />} />
          </Routes>
        )}
      </section>
      <footer className="footer-app">
        <h2>IGLESIA CUADRANGULAR ACARIGUA - 2025 </h2>
      </footer>
    </>
  );
}

export default App;
