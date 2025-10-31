import CartWidget from './CartWidget'; 

function Navbar() {
    return (
        <nav>
            <div>
               <h1>Krakenshop</h1>
            </div>
            <div>
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

