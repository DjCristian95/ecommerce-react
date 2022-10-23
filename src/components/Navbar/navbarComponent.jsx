import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from 'react-router-dom';
import CartWidgetComponent from './cartWidgetComponent';

const NavbarComponent = (cart) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink to="/" style={{ color: 'snow', textDecoration: 'inherit', fontWeight: 'bold' }}>
                    <img src='/logo_tienda.jpg'
                        width="40"
                        height="30"
                        className="d-inline-block align-top"
                        alt='logo'
                    />
                    <span style={{ marginLeft: '8px' }}>
                        Titulo-Tienda
                    </span>
                </NavLink >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navbar-nav mx-auto">
                        <NavLink to="/Novedades" style={{ color: 'snow', textDecoration: 'inherit', fontWeight: '600' }}>Novedades</NavLink >
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Categorías"
                                menuVariant="dark"
                                style={{ color: 'snow', textDecoration: 'inherit', fontWeight: '600', marginTop: '-8px' }}
                            >
                                <NavDropdown.Item as={Link} to={'/categoria/1'}>Autos</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={'/categoria/2'}>
                                    Camionetas
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to={'/'}>
                                    Todos
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <NavLink to="/Contacto" style={{ color: 'snow', textDecoration: 'inherit', fontWeight: '600' }}>Contacto</NavLink >
                    </Nav>
                    <Nav>
                        <Navbar.Brand href="#">
                            <CartWidgetComponent cart={cart} />
                        </Navbar.Brand>
                        <NavLink to="/login" style={{ color: 'snow', textDecoration: 'inherit', fontWeight: '600', marginTop: '11px' }}>Login</NavLink >
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;