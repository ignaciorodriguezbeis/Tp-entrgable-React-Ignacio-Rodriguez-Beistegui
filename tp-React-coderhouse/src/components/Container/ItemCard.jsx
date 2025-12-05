import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./ItemCard.css";

const ItemCard = ({ juego }) => {
  const { agregarAlCarrito } = useContext(CartContext);
  const navigate = useNavigate();

  const handleVerMas = () => {
    navigate(`/item/${juego.id}`);
  };

  return (
    <div className="itemcard">
      <img src={juego.imagen} alt={juego.nombre} />
      <div className="info">
        <h2>{juego.nombre}</h2>
        <p className="categoria">{juego.categoria}</p>
        <p className="descripcion">{juego.descripcion}</p>
        <span className="precio">${juego.precio.toFixed(2)}</span>
      </div>
      <div className="button-list">
        <button onClick={() => agregarAlCarrito(juego)}>agregar al Carrito</button>
        <button onClick={handleVerMas}>Ver más</button>
      </div>
    </div>
  );
};

export default ItemCard;
