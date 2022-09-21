import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { CartContext } from '../../contexts/cartContext'
import { useContext } from 'react';

const CartWidgetComponent = ({ ...props }) => {
    const [show, setShow] = useState(false);
    const windowCartClose = () => setShow(false);
    const windowCartShow = () => setShow(true);
    const {cart} = useContext(CartContext);

    return (
        <>
            <Button variant="dark" onClick={windowCartShow} className="me-2">
                <img src='/cart.svg'
                    width="40"
                    height="30"
                    className="d-inline-block align-top"
                    alt='logo'
                />
                <span>{cart.length}</span>
            </Button>
            <Offcanvas show={show} onHide={windowCartClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Tu carrito</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <span> Cantidad de items: {cart.length}</span>
                <ul>
                {
                    cart.map(item => {
                        return (<li>{item.title} --- {item.quantity} unidades</li>)
                    })
                }
                </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default CartWidgetComponent;