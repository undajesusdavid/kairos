import "./layout.css";

function Layout({ children }) {
  return (
    <>
      <header className="header-app">
        <h1 className="title-app">REPERTORIO KAIROS</h1>
      </header>
      <section className="main-app">{children}</section>
      <footer className="footer-app">
        <h2>IGLESIA CUADRANGULAR ACARIGUA - 2025 </h2>
      </footer>
    </>
  );
}

export default Layout;
