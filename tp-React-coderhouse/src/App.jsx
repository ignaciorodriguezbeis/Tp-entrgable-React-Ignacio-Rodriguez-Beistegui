
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar'
import ItemDetail from './components/Container/ItemDetairl'    //una cosa curiosa que me paso enesta linea es que si ponia ItemDetail me tiraba error, tuve que poner ItemDetairl como en el nombre del archivo
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/Container/ItemListContainer'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <NavBar />
      <ItemDetail />
      <ItemListContainer />
      <Footer />
    </CartProvider>
  )
}

export default App
