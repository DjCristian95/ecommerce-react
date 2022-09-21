import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CartWidgetComponent from './cartWidgetComponent';

const NavbarComponent = (cart) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/">
                    <img src='/logo_tienda.jpg'
                        width="40"
                        height="30"
                        className="d-inline-block align-top"
                        alt='logo'
                    />
                    Titulo-Tienda
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav mx-auto">
                        <Link to="/Novedades">Novedades</Link>
                        <Link to="/Categorias"><NavDropdown title="Categorías" id="collasible-nav-dropdown">
                            <Link to="/Categorias/1" className={'dropdown-item'}>
                                Agendas
                            </Link>
                            <Link to="/Categorias/2" className={'dropdown-item'}>
                                Albums
                            </Link>
                            <Link to="/Categorias/3" className={'dropdown-item'}>
                                Personalizados
                            </Link>
                        </NavDropdown></Link>
                        <Link to="/Contacto">Contacto</Link>
                    </Nav>
                    <Nav>
                        <Navbar.Brand href="#">
                            <CartWidgetComponent cart={cart}/>
                        </Navbar.Brand>
                        <Link to="/login">Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;