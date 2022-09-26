import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { CartContext } from '../../contexts/cartContext'
import { useContext } from 'react';

const CartWidgetComponent = ({ ...props }) => {
    const [show, setShow] = useState(false);
    const windowCartClose = () => setShow(false);
    const windowCartShow = () => setShow(true);
    const { cart, removeItem, clearItems } = useContext(CartContext);

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
                    <span><b> Cantidad de items:</b> {cart.length}</span>
                    <br/><br/>
                    <div class="row" align="center">
                        <div class="col-5">
                            <b>Item</b>
                        </div>
                        <div class="col-2">
                            <b>Cant.</b>
                        </div>
                        <div class="col-2">
                            <b>Precio</b>
                        </div>
                    </div>
                    <ul>
                        {
                            cart.map(item => {
                                return (
                                    <li>
                                        <div class="row">
                                            <div class="col-5">
                                                {item.title}
                                            </div>
                                            <div class="col-2" align="center">
                                                {item.quantity}
                                            </div>
                                            <div class="col-2" align="center">
                                                {item.price}
                                            </div>
                                            <div class="col-2">
                                                <Button className="btn-danger" onClick={() => { handlerBorrar(item.id) }} > Borrar </Button>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Offcanvas.Body>
                <Button className="btn-danger" onClick={clearItems} > Vaciar Carrito</Button>
            </Offcanvas>
        </>
    )
}

export default CartWidgetComponent;