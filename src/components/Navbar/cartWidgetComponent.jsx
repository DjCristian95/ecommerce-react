import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { CartContext } from '../../contexts/cartContext'
import { useContext } from 'react';

const CartWidgetComponent = ({ ...props  }) => {
    const [show, setShow] = useState(false);
    const windowCartClose = () => setShow(false);
    const windowCartShow = () => setShow(true);
    const {cart, removeItem, clearItems} = useContext(CartContext);

    const handlerBorrar = (id) => {
        removeItem(id);
    };


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
                {cart.length > 0 ? (
                    <Offcanvas.Title>Tu carrito</Offcanvas.Title>
                ) : (
                    <Offcanvas.Title>Tu carrito esta vacío</Offcanvas.Title>
                )}
                </Offcanvas.Header>
                <Offcanvas.Body>
                <span> Cantidad de items: {cart.length}</span>
                <ul>
                {
                    cart.map(item => {
                        return (
                            <li>
                                {item.title} --- {item.quantity} unidades
                                <Button className="btn-danger"  onClick={() => {handlerBorrar(item.id)}} > Borrar</Button>
                            </li>
                        )
                    })
                }
                </ul>
                </Offcanvas.Body>
                <Button className="btn-danger"  onClick={clearItems} > Vaciar Carrito</Button>
            </Offcanvas>
        </>
    )
}

export default CartWidgetComponent;