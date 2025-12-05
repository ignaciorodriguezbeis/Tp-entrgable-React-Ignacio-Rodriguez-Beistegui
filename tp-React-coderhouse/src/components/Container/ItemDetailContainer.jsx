import { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';
import { app } from '../../firebaseConfig';
import { CartContext } from '../../context/CartContext';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [juego, setJuego] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [comments, setComments] = useState([]);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [cantidad, setCantidad] = useState(1);
    const { agregarAlCarrito } = useContext(CartContext);

    useEffect(() => {
        (async () => {
            try {
                const db = getFirestore(app);
                const refDoc = doc(db, 'products', id);
                const snap = await getDoc(refDoc);
                if (snap.exists()) {
                    setJuego({ id: snap.id, ...snap.data() });
                } else {
                    setError('Producto no encontrado');
                }
            } catch (err) {
                setError(err.message || 'Error al cargar producto');
            } finally {
                setLoading(false);
            }
        })();
    }, [id]);

    useEffect(() => {
        try {
            const raw = localStorage.getItem(`comments_${id}`);
            if (raw) {
                setComments(JSON.parse(raw));
            } else {
                setComments([]);
            }
        } catch (e) {
            setComments([]);
        }
    }, [id]);

    const saveComments = (newComments) => {
        setComments(newComments);
        try {
            localStorage.setItem(`comments_${id}`, JSON.stringify(newComments));
        } catch (e) {
            console.error('No se pudo guardar comentario:', e);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        const newComment = {
            nombre: author.trim(),
            texto: text.trim(),
            fecha: Date.now(),
        };
        const newComments = [newComment, ...comments];
        saveComments(newComments);
        setAuthor('');
        setText('');
    };

    const handleClear = () => {
        setAuthor('');
        setText('');
    };

    const aumentar = () => setCantidad((c) => c + 1);
    const disminuir = () => setCantidad((c) => Math.max(1, c - 1));

    const handleAgregarAlCarrito = () => {
        if (!juego) return;
        for (let i = 0; i < cantidad; i++) {
            agregarAlCarrito(juego);
        }
    };

    if (loading) return <p className="loading">Cargando detalle...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <main className="itemdetail-page">
            <div className="breadcrumb">
                <Link to="/catalogo">← Volver al catálogo</Link>
            </div>

            <div className="detail-grid">
                <aside className="image-panel">
                    <div className="image-frame">
                        <img src={juego.imagen} alt={juego.nombre} />
                    </div>
                </aside>

                <section className="info-panel">
                    <div className="info-top">
                        
                        <h1 className="title">{juego.nombre}</h1>
                        <h2>{juego.editorial}</h2>
                        <p className="lead">{juego.descripcion}</p>

                        <div className="kpis">
                            <div className="kpi"> <strong>{juego.jugadores || '—'}</strong><div className="kpi-label">Jugadores</div></div>
                            <div className="kpi"> <strong>{juego.duracion || '—'}</strong><div className="kpi-label">Duración</div></div>
                            <div className="kpi"> <strong>{juego.edadMinima || '—'}</strong><div className="kpi-label">Edad mínima</div></div>
                        </div>
                    </div>

                    <aside className="purchase-box">
                        <div className="price-row">
                            <div className="precio-label">Precio</div>
                            <div className="precio-amount">${juego.precio?.toFixed(2)}</div>
                        </div>

                        <div className="quantity-row">
                            <button className="qty-btn" onClick={disminuir}>-</button>
                            <div className="qty-value">{cantidad}</div>
                            <button className="qty-btn" onClick={aumentar}>+</button>
                            <button className="add-cart" onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
                        </div>

                        <div className="purchase-info">
                            <div className="info-item">Envío gratis en compras + $50.000</div>
                            <div className="info-item">Garantía 12 meses</div>
                            <div className="info-item">Devoluciones 30 días</div>
                        </div>
                    </aside>
                </section>
            </div>

            <section className="comentarios-section">
                <h2>Comentarios</h2>

                <form className="comentarios-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Tu nombre (opcional)"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <textarea
                        placeholder="Escribe tu comentario..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />
                    <div className="comentarios-actions">
                        <button type="submit">Publicar comentario</button>
                        <button type="button" className="btn-clear" onClick={handleClear}>Limpiar</button>
                    </div>
                </form>

                <div className="comentarios-list">
                    {comments.length === 0 ? (
                        <p className="empty-comments">Sé el primero en comentar.</p>
                    ) : (
                        comments.map((c, idx) => (
                            <div key={idx} className="comentario">
                                <div className="comentario-meta">
                                    <strong>{c.nombre || 'Anónimo'}</strong>
                                    <span className="comentario-fecha">{new Date(c.fecha).toLocaleString()}</span>
                                </div>
                                <p className="comentario-text">{c.texto}</p>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </main>
    );
};

export default ItemDetailContainer;
