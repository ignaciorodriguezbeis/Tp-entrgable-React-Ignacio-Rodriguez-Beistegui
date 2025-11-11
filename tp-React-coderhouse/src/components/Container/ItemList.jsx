import ItemCard from "./ItemCard";
import "./ItemList.css";

const ItemList = ({ juegos }) => {
  return (
    <div className="itemlist">
      {juegos.map((juego) => (
        <ItemCard key={juego.id} juego={juego} />
      ))}
    </div>
  );
};

export default ItemList;
