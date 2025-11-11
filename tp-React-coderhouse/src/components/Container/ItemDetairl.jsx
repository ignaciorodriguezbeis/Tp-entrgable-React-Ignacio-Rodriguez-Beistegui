import './ItemDetairl.css';

function ItemDetairl() {
    return (
        <section>
            <article >
                <div className="portada">
                    <h1>Bienvenido Krakenshop</h1>
                    <p>
                        Próximamente: catálogo completo de juegos de mesa para toda la familia. 
                    </p>
                    <p>Encuentra los mejores juegos, expansiones y accesorios en un solo lugar.</p>
                </div>
                <div className="botones-portada">
                    <button>explorar catálogo</button>
                    <button>más información</button>
                </div>
            </article>
            <article className="estadisticas">
                <div>
                    <h2>500+</h2>
                    <p>juegos disponibles</p>
                </div>
                <div>
                    <h2>24/7</h2>
                    <p>atención al cliente</p>
                </div>
                <div>
                    <h2>4.9</h2>
                    <p>valoración promedio</p>
                </div>
            </article>
        </section>
    )
}

export default ItemDetairl


