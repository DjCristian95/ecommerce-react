import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/Navbar/navbarComponent';
import ItemListContainer from './container/itemListContainer';


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <ItemListContainer greeting="itemListContainer" />
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
