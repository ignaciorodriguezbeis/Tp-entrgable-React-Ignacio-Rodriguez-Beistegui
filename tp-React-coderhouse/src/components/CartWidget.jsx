function CartWidget() {
    return (
        <button
            className="cart-widget"
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                backgroundColor: '#88b8e8',
                borderRadius: '20px',
                cursor: 'pointer',
                border: '1px solid #0a2303ff',
                position: 'relative'
            }}
            aria-label="Carrito"
        >
            <img
                src="./src/assets/img/carro-de-la-compra.png"
                alt="Carrito de compras"
                style={{ width: '24px', height: '24px' }}
            />
            <span
                style={{
                    backgroundColor: '#eee83d',
                    border: '1px solid #000000',
                    color: '#000000',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    minWidth: '20px'
                }}
            >
                0
            </span>
        </button>
    )
}

export default CartWidget