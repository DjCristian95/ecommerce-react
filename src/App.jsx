import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/Navbar/navbarComponent';
import ItemListContainer from './container/itemListContainer';
import ItemDetailContainer from './container/itemDetailContainer';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <NavbarComponent cart={cart} setCart={setCart} />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/producto/:idProducto" element={<ItemListContainer />} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
        <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
