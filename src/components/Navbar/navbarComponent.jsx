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
                    <img src="./logo_tienda.jpg"
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
                            <NavDropdown.Item href="#action/3.1">Agendas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Albums </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Personalizados</NavDropdown.Item>
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