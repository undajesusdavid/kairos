import "./App.css";
import Canciones from "./canciones";
import logo from './assets/logo-cuadrangular.png';
function App() {
  return <>
    <header className="header-app">
      {/* <img className="logo" src={logo} alt="Iglesia del Evangelio cuadrangular" /> */}
      <h1 className="title-app">REPERTORIO KAIROS</h1>
    </header>
    <section className="main-app">
      <Canciones />
    </section>
    <footer className="footer-app">
      <h2>IGLESIA CUADRANGULAR ACARIGUA  - 2025 </h2>
    </footer>

  </>;
}

export default App;
