import "./ItemCard.css";

const ItemCard = ({ juego }) => {
  return (
    <div className="itemcard">
      <img src={juego.imagen} alt={juego.nombre} />
      <div className="info">
        <h2>{juego.nombre}</h2>
        <p className="categoria">{juego.categoria}</p>
        <p className="descripcion">{juego.descripcion}</p>
        <div className="footer">
          <span className="precio">${juego.precio.toFixed(2)}</span>
          <button>Ver más</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
