import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cartContext'
import { useContext } from 'react';

const CartWidgetComponent = ({ ...props }) => {
    const [show, setShow] = useState(false);
    const windowCartClose = () => setShow(false);
    const windowCartShow = () => setShow(true);
    const { cart, removeItem, clearItems, total } = useContext(CartContext);
    const [precioTotal, setPrecioTotal] = useState(0);

    useEffect(() => {
        setPrecioTotal(total())
    }, [cart, total]);

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
                <hr />
                <Offcanvas.Body>
                    <span><b> Cantidad de items:</b> {cart.length}</span>
                    <br /><br /><br />
                    <div className="row" align="center">
                        <div className="col-5">
                            <b>Item</b>
                        </div>
                        <div className="col-2">
                            <b>Cant.</b>
                        </div>
                        <div className="col-2">
                            <b>Precio</b>
                        </div>
                    </div>
                    <ul>
                        {
                            cart.map(item => {
                                return (
                                    <li key={item.id}>
                                        <div className="row">
                                            <div className="col-5">
                                                {item.title}
                                            </div>
                                            <div className="col-2" align="center">
                                                {item.quantity}
                                            </div>
                                            <div className="col-2" align="center">
                                                {item.price}
                                            </div>
                                            <div className="col-2">
                                                <Button className="btn-danger" onClick={() => { handlerBorrar(item.id) }} > Borrar </Button>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Offcanvas.Body>
                <h1 style={{ marginLeft: '4%' }} >Total: {precioTotal}</h1>
                <span>
                    <div className="row justify-content-around" >
                        <div className="col-5">
                            <Button className="btn-danger" onClick={clearItems} > Vaciar Carrito</Button>
                        </div>
                        <div className="col-5">
                            <Link to={`finalizarCompra`}> <Button className="btn-success" onClick={windowCartClose}> Finalizar Compra</Button></Link>
                        </div>
                    </div>
                </span>
                <br />
            </Offcanvas>
        </>
    )
}

export default CartWidgetComponent;