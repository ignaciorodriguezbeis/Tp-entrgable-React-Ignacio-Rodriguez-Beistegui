import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './Navbar.css';

function Navbar() {
    return (
        <nav >
            <section>
                <div>
                    <Link to="/" className="logo">Krakenshop</Link>
                </div>
                <Link to="/">Home</Link>
            </section>
            <div className="navbar">
                <Link to="/catalogo">Catálogo</Link>
                <Link to="/catalogo">Categorías</Link>
                <Link to="/catalogo">Expansiones</Link>
                <Link to="/catalogo">Repuestos</Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar

