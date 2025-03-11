import "./letra_ensayo.css";

function LetraDeEnsayo({ letra }) {
  return (
    <div className="letra_ensayo">
      {letra.map((parrafo, index) => (
        <p key={index} className="parrafo">
          {parrafo}
        </p>
      ))}
    </div>
  );
}

export default LetraDeEnsayo;
