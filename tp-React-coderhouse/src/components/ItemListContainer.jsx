function ItemListContainer({ greeting }) {
    return (
        <section style={{ padding: '24px 16px' }}>
            <h1 style={{ margin: 0, color: '#111827' }}>{greeting}</h1>
            <p style={{ color: '#6b7280', marginTop: '8px' }}>
                Próximamente: catálogo de juegos de mesa.
            </p>
        </section>
    )
}

export default ItemListContainer


