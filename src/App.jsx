import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/Navbar/navbarComponent';
// import ItemListContainer from './container/itemListContainer';
import ItemDetailContainer from './container/itemDetailContainer';
import { useState, useEffect } from 'react';




function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <NavbarComponent cart={cart} />
      <br />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
