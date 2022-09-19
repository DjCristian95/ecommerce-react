import './App.css';
import NavbarComponent from './components/Navbar/navbarComponent';
import ItemListContainer from './container/itemListContainer';
import ItemDetailContainer from './container/itemDetailContainer';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContext from './contexts/cartContext';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider>
      <BrowserRouter>
        <NavbarComponent cart={cart} setCart={setCart} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/producto/:idProducto" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/detalle/:key" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
