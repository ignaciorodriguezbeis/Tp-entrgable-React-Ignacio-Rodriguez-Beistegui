import './App.css'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a KrakenShop!" />
    </>
  )
}

export default App
