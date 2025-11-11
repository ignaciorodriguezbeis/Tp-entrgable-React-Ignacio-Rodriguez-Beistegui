
import NavBar from './components/Navbar/Navbar'
import ItemDetail from './components/Container/ItemDetairl'    //una cosa curiosa que me paso enesta linea es que si ponia ItemDetail me tiraba error, tuve que poner ItemDetairl como en el nombre del archivo
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/Container/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemDetail />
      <ItemListContainer />
      <Footer />
    </>
  )
}

export default App
