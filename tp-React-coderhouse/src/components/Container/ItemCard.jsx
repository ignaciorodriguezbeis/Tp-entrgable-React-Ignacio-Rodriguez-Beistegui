import "./ItemCard.css";

const ItemCard = ({ juego }) => {
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
        <button onClick={() => onAgregar(juego)}>agregar al carrito</button>
        <button>Ver más</button>
      </div>
    </div>
  );
};

export default ItemCard;
