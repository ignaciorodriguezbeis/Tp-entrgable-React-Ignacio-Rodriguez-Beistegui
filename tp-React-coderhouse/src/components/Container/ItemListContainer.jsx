import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import { app } from "../../firebaseConfig";

import { getFirestore, collection, getDocs } from "firebase/firestore/lite";


const ItemListContainer = ({ greeting }) => {
  const [juegos, setJuegos] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    (async () => {
      try {
        const db = getFirestore(app);
        const productsCollection = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCollection)
       const productsDb = productsSnapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
        })
       
        setJuegos(productsDb)
        setLoading(false)
        
      } catch (error) {
        console.log("Error juegos: ", error)
      }
    }) ()
  }, []);



  return (
    <main className="itemlistcontainer">
      <h1>{greeting}</h1>
      {loading ? (
        <p className="loading">Cargando catálogo...</p>
      ) : (
        <ItemList juegos={juegos} />
      )}
    </main>
  );
};

export default ItemListContainer;
