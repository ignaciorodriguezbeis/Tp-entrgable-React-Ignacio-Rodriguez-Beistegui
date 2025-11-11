import CartWidget from './CartWidget';
import './Navbar.css';

function Navbar() {
    return (
        <nav >
            <section>
                <div>
                    <h1 href="#">Krakenshop</h1>
                </div>
                <a href="#">Home</a>
            </section>
            <div className="navbar">
                <a href="#">Infantiles</a>
                <a href="#">Categorias</a>
                <a href="#">Expansiones</a>
                <a href="#">Repuestos</a>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar

