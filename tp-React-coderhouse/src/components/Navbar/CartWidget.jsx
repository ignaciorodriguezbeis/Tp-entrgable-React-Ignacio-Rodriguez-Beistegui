import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import CartModal from './CartModal';
import './CartWidget.css';

function CartWidget() {
    const { obtenerCantidadTotal } = useContext(CartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const cantidadTotal = obtenerCantidadTotal();

    return (
        <>
            <button
                className="cart-widget"
                aria-label="Carrito"
                onClick={() => setIsModalOpen(true)}
            >
                <img
                    src="/src/assets/img/carro-de-la-compra.png"
                    alt="Carrito de compras"
                />
                <div>
                    <span className='contador-articulos'>
                        {cantidadTotal}
                    </span>
                </div>
            </button>
            <CartModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}

export default CartWidget