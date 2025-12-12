import { useContext, useState } from 'react';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { app } from '../../firebaseConfig';
import { CartContext } from '../../context/CartContext';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const { cartItems, vaciarCarrito } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ nombre: '', email: '', telefono: '', direccion: '' });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const calcularTotal = () => cartItems.reduce((t, it) => t + it.precio * it.cantidad, 0);

  const handleChange = (e) => setBuyer({ ...buyer, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return alert('Carrito vacío');

    setLoading(true);
    try {
      const db = getFirestore(app);
      const order = {
        buyer,
        items: cartItems,
        total: calcularTotal(),
        createdAt: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
      vaciarCarrito();
    } catch (err) {
      console.error('Error creando orden', err);
      alert('Ocurrió un error al procesar la orden');
    } finally {
      setLoading(false);
    }
  };

  if (orderId) return (
    <main className="checkout-page">
      <h1>Gracias por tu compra</h1>
      <p>Tu orden fue generada correctamente. ID: <strong>{orderId}</strong></p>
    </main>
  );

  return (
    <main className="checkout-page">
      <h1>Checkout</h1>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre" value={buyer.nombre} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={buyer.email} onChange={handleChange} required />
        <input name="telefono" placeholder="Teléfono" value={buyer.telefono} onChange={handleChange} />
        <input name="direccion" placeholder="Dirección" value={buyer.direccion} onChange={handleChange} required />
        <div className="checkout-summary">
          <p>Total a pagar: ${calcularTotal().toFixed(2)}</p>
          <button type="submit" disabled={loading}>{loading ? 'Procesando...' : 'Confirmar Compra'}</button>
        </div>
      </form>
    </main>
  );
};

export default CheckoutForm;
