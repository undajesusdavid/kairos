import "./letra_ensayo.css";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { getLetraCancion} from "../controllers/CancionesController";
import Loading from "../components/Loading";
import Slider from "./components/Slider";

export default function LetraEnsayo() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [letra, setLetra] = useState([]);

  useEffect(() => {
    setLoading(true);
    getLetraCancion(id,(data) => {
      setLetra(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (letra.length === 0) {
    <h2>La letra de la cacion no esta registrada</h2>;
  }
  return (
    <div className="root-letra-ensayo">
      <Slider slides={letra} />
    </div>
  );
}
