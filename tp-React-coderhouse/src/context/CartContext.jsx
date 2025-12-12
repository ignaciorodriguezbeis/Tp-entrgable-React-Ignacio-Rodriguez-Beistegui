import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const agregarAlCarrito = (juego, cantidad = 1) => {
    setCartItems((prevItems) => {
      const itemExistente = prevItems.find((item) => item.id === juego.id);

      if (itemExistente) {
        return prevItems.map((item) =>
          item.id === juego.id ? { ...item, cantidad: item.cantidad + cantidad } : item
        );
      } else {
        return [...prevItems, { ...juego, cantidad }];
      }
    });
  };

  const obtenerCantidadTotal = () => {
    return cartItems.reduce((total, item) => total + item.cantidad, 0);
  };

  const eliminarDelCarrito = (juegoId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== juegoId));
  };

  const disminuirCantidad = (juegoId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === juegoId ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const aumentarCantidad = (juegoId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === juegoId ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const vaciarCarrito = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, agregarAlCarrito, obtenerCantidadTotal, eliminarDelCarrito, disminuirCantidad, aumentarCantidad, vaciarCarrito }}>
      {children}
    </CartContext.Provider>
  );
};
