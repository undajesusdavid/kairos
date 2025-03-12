import { Route, Routes } from "react-router";
import "./App.css";
import Canciones from "./canciones/index.jsx";
import DetallesCancion from "./detalles_cancion/index.jsx";
import { useSupabase } from "./utils/SupabaseProvider.jsx";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/index.jsx";
import LetraEnsayo from "./letra_ensayo/index.jsx";

function App() {
  const [loading, setLoading] = useState(false);
  const { session, hanldeSignIn } = useSupabase();
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    if (!session) {
      setLoading(true);
      hanldeSignIn("undajesusdavid@gmail.com", "Kaimegansusej95*", (error) => {
        setAutenticado(error ? false : true);
        setLoading(false)

      });
    }else{
      setAutenticado(true);
    }
  }, []);

  if(loading){
    return <Loading />
  }

  return (
    <>
      <header className="header-app">
        {/* <img className="logo" src={logo} alt="Iglesia del Evangelio cuadrangular" /> */}
        <h1 className="title-app">REPERTORIO KAIROS</h1>
      </header>
      <section className="main-app">
        {autenticado === false ? (
          <div>Error de conexion con la base de datos</div>
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
