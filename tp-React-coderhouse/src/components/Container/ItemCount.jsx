import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock = 99, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const aumentar = () => setCount((c) => Math.min(stock, c + 1));
  const disminuir = () => setCount((c) => Math.max(1, c - 1));

  const handleAdd = () => {
    if (onAdd) onAdd(count);
  };

  return (
    <div className="itemcount">
      <div className="controls">
        <button className="qty-btn" onClick={disminuir}>-</button>
        <div className="qty-value">{count}</div>
        <button className="qty-btn" onClick={aumentar}>+</button>
      </div>
      <button className="add-cart" onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
