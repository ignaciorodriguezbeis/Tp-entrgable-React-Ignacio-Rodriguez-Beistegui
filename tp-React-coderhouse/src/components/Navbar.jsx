import CartWidget from './CartWidget'

function Navbar() {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 32px',
            backgroundColor: '#343a40',
            color: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <div style={{
                fontSize: '40px',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif',
            }}>
                Krakenshop
            </div>
            <div style={{
                display: 'flex',
                gap: '32px',
                fontSize: '22px'
            }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '24px' }}>Infantiles</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '24px' }}>Categorias</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '24px' }}>Expansiones</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '24px' }}>Repuestos</a>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar

 