import './CartWidget.css';

function CartWidget() {
    return (
        <button
            className="cart-widget"

            aria-label="Carrito"
        >
            <img
                src="./src/assets/img/carro-de-la-compra.png"
                alt="Carrito de compras"

            />
            <div>
                <span>
                    0
                </span>
            </div>
        </button>
    )
}

export default CartWidget