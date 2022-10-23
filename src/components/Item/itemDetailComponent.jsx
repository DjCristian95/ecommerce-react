import Image from 'react-bootstrap/Image'
import Container from "react-bootstrap/Container";
import { useContext } from 'react'
import ItemCountComponent from './itemCountComponent'
import { CartContext } from '../../contexts/cartContext'

const ItemDetailComponent = ({ item }) => {

    const { addItem } = useContext(CartContext);

    const handlerAddItem = (quantity) => {
        const add_item = { title: item.title, id: item.id, quantity, price: item.price };
        addItem(add_item);
    }

    return (
        <Container>
            <div className="bg-light shadow-lg rounded-3 px-4 py-3 mb-5">
                <div className="px-lg-3">
                    <div className="row">
                        <div className="col-lg-7 pe-lg-0 pt-lg-4">
                            <div className="product-gallery">
                                <div className="row justify-content-center">
                                    <figure className="justify-content-center ui-pdp-gallery__figure ">
                                        <Image data-zoom={item.image} data-index="0" width="410" height="500" decoding="async" src={item.image} className="ui-pdp-image rounded" alt="" />
                                    </figure>
                                </div>
                                <div className="container">
                                    <div className="row justify-content-between" style={{ width: '420px' }}>
                                        <div className="col-4">
                                            <a href="#first"><Image src={item.image} alt="" className='img-fluid rounded' /></a>
                                        </div>
                                        <div className="col-4">
                                            <a href="#second"><Image src={item.image} alt="" className='img-fluid rounded' /></a>
                                        </div>
                                        <div className="col-4">
                                            <a href="#third"><Image src={item.image} alt="" className='img-fluid rounded' /></a>
                                        </div>
                                    </div> </div>
                            </div>
                        </div>
                        <div className="col-lg-5 pt-4 pt-lg-0">
                            <div className="product-details ms-auto pb-3">
                                <div className="d-inline-flex p-2">
                                    <span> <h1> {item.title} </h1> </span>
                                </div>
                                <br />
                                <div className="mb-3">
                                    <span className="h3 fw-normal text-accent me-1"> {item.currency} {item.price}</span>
                                </div>
                                <br />
                                <div className="mb-grid-gutter" style={{ width: '50%' }}>
                                    <ItemCountComponent stock={item.stock} initial={1} handlerAddItem={handlerAddItem} />
                                </div>
                                <br />
                                <div className="accordion mb-4" id="productPanels">
                                    <div className="accordion-item">
                                        <h3 className="accordion-header"><a className="accordion-button" href="#productInfo" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="productInfo"><i className="ci-announcement text-muted fs-lg align-middle mt-n1 me-2"></i>Información del Producto</a></h3>
                                        <div className="accordion-collapse collapse show" id="productInfo" data-bs-parent="#productPanels">
                                            <div className="accordion-body">
                                                <h6 className="fs-sm mb-2">{item.description}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ItemDetailComponent;