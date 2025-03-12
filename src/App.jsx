import { useSupabase } from "./utils/SupabaseProvider.jsx";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/index.jsx";
import Layout from "./layout";
import ComponentRoutes from "./router/ComponentRoutes.jsx";

function App() {
  const [loading, setLoading] = useState(false);
  const { session, hanldeSignIn } = useSupabase();

  useEffect(() => {
    if (!session) {
      setLoading(true);
      hanldeSignIn("undajesusdavid@gmail.com", "Kaimegansusej95*", (error) => {
        setLoading(false);
      });
    }
  }, []);

  if (loading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  return (
    <Layout>
      {!session ? (
        <div>Error de conexion con la base de datos</div>
      ) : (
        <ComponentRoutes />
      )}
    </Layout>
  );
}

export default App;
