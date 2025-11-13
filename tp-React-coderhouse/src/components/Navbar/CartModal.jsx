import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartModal.css';

function CartModal({ isOpen, onClose }) {
    const { cartItems, eliminarDelCarrito, disminuirCantidad, aumentarCantidad } = useContext(CartContext);

    if (!isOpen) return null;

    const calcularTotal = () => {
        return cartItems.reduce((total, item) => total + item.precio * item.cantidad, 0);
    };

    return (
        <>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="cart-modal">
                <div className="modal-header">
                    <h2>Carrito de Compras</h2>
                    <button className="close-button" onClick={onClose}>✕</button>
                </div>

                <div className="modal-content">
                    {cartItems.length === 0 ? (
                        <p className="empty-cart">Tu carrito está vacío</p>
                    ) : (
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.imagen} alt={item.nombre} className="item-image" />
                                    <div className="item-details">
                                        <h3>{item.nombre}</h3>
                                        <p className="item-price">${item.precio.toFixed(2)}</p>
                                    </div>
                                    <div className="item-cantidad">
                                        <p>Cantidad: {item.cantidad}</p>
                                        <p className="item-subtotal">${(item.precio * item.cantidad).toFixed(2)}</p>
                                    </div>
                                    <div className="item-actions">
                                        <button
                                            className="btn-aumentar"
                                            onClick={() => aumentarCantidad(item.id)}
                                            title='Aumentar Cantidad'
                                        >
                                            +
                                        </button>
                                        <button
                                            className="btn-disminuir"
                                            onClick={() => disminuirCantidad(item.id)}
                                            title="Disminuir Cantidad"
                                        >
                                            -
                                        </button>
                                        <button
                                            className="btn-eliminar"
                                            onClick={() => eliminarDelCarrito(item.id)}
                                            title="Eliminar Del Carrito"
                                        >
                                            X
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="modal-footer">
                        <button className="checkout-button">Continuar Compra</button>
                        <div className="total-section">
                            <h3>Total: ${calcularTotal().toFixed(2)}</h3>
                        </div>

                    </div>
                )}
            </div>
        </>
    );
}

export default CartModal;
