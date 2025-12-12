import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, eliminarDelCarrito, disminuirCantidad, aumentarCantidad } = useContext(CartContext);
  const navigate = useNavigate();

  const calcularTotal = () => cartItems.reduce((t, it) => t + it.precio * it.cantidad, 0);

  return (
    <main className="cart-page">
      <h1>Carrito</h1>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-row">
              <img src={item.imagen} alt={item.nombre} />
              <div className="cart-info">
                <h3>{item.nombre}</h3>
                <p>${item.precio.toFixed(2)}</p>
                <p>Cantidad: {item.cantidad}</p>
                <p>Subtotal: ${(item.precio * item.cantidad).toFixed(2)}</p>
                <div className="cart-actions">
                  <button onClick={() => aumentarCantidad(item.id)}>+</button>
                  <button onClick={() => disminuirCantidad(item.id)}>-</button>
                  <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total: ${calcularTotal().toFixed(2)}</h3>
            <button onClick={() => navigate('/checkout')}>Ir a Checkout</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;
