import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const CartWidgetComponent = ({ cart, ...props }) => {
    const [show, setShow] = useState(false);
    const windowCartClose = () => setShow(false);
    const windowCartShow = () => setShow(true);

    console.log(cart);

    return (
        <>
            <Button variant="dark" onClick={windowCartShow} className="me-2">
                <img src="./cart.svg"
                    width="40"
                    height="30"
                    className="d-inline-block align-top"
                    alt='logo'
                />
            </Button>
            <Offcanvas show={show} onHide={windowCartClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Tu carrito</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Prueba Cart
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default CartWidgetComponent;