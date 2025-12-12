
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar'
import ItemDetairl from './components/Container/ItemDetairl'
import ItemListContainer from './components/Container/ItemListContainer'
import ItemDetailContainer from './components/Container/ItemDetailContainer'
import Footer from './components/Footer/Footer'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import CheckoutForm from './components/Checkout/CheckoutForm'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemDetairl />} />
          <Route path="/catalogo" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
