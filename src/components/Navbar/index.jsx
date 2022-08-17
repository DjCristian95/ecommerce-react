import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
                <img src="./logo_tienda.jpg"
                    width="40"
                    height="30"
                    className="d-inline-block align-top"
                />
                Titulo-Tienda
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav mx-auto">
                <Nav.Link href="#novedades">Novedades</Nav.Link>
                <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Agendas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Albums </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Personalizados</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="#login">Login</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavbarComponent;