import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [juegos, setJuegos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/juegos.json")
      .then((res) => res.json())
      .then((data) => {
        setJuegos(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error al cargar los juegos:", error));
  }, []);

  return (
    <main className="itemlistcontainer">
      <h1>{greeting}</h1>
      {loading ? (
        <p className="loading">Cargando catálogo...</p>
      ) : (
        <ItemList juegos={juegos} />
      )}
    </main>
  );
};

export default ItemListContainer;
