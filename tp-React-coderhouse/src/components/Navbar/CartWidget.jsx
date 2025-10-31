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
            <span

            >
                0
            </span>
        </button>
    )
}

export default CartWidget