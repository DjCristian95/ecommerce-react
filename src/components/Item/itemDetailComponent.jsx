import Image from 'react-bootstrap/Image'
import Container from "react-bootstrap/Container";

const ItemDetailComponent = ({ item }) => {

    return (
        <Container>
            <div className="bg-light shadow-lg rounded-3 px-4 py-3 mb-5">
                <div className="px-lg-3">
                    <div className="row">
                        <div className="col-lg-7 pe-lg-0 pt-lg-4">
                            <div className="product-gallery">
                                <div className="product-gallery-preview order-sm-2">
                                    <figure className="ui-pdp-gallery__figure">
                                        <Image data-zoom={item.thumbnail} data-index="0" width="410" height="500" decoding="async" src={item.thumbnail} className="ui-pdp-image ui-pdp-gallery__figure__image" alt="" />
                                    </figure>
                                </div>
                                <div className="product-gallery-thumblist order-sm-1">
                                    <a href="#first"><Image src={item.thumbnail} alt="" /></a>
                                    <a  href="#second"><Image src={item.thumbnail} alt="" /></a>
                                    <a  href="#third"><Image src={item.thumbnail} alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 pt-4 pt-lg-0">
                            <div className="product-details ms-auto pb-3">
                                <div className="d-inline-flex p-2">
                                    <span> <h1> {item.title} </h1> </span>
                                </div>
                                <div className="mb-3">
                                    <span className="h3 fw-normal text-accent me-1">{item.currency_id} {item.price}</span>
                                </div>
                                <div className="position-relative me-n4 mb-3">
                                    <div className="product-badge product-available mt-n1"><i className="ci-security-check"></i>Stock disponible: <span>{item.available_quantity}</span></div>
                                </div>
                                <form className="mb-grid-gutter" method="post">
                                    <div className="mb-3 d-flex align-items-center">
                                        <select className="form-select me-3">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                        <button className="btn btn-primary btn-shadow d-block w-100" type="submit"><i className="ci-cart fs-lg me-2"></i>Agregar al carrito</button>
                                    </div>
                                </form>
                                <div className="accordion mb-4" id="productPanels">
                                    <div className="accordion-item">
                                        <h3 className="accordion-header"><a className="accordion-button" href="#productInfo" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="productInfo"><i className="ci-announcement text-muted fs-lg align-middle mt-n1 me-2"></i>Información del Producto</a></h3>
                                        <div className="accordion-collapse collapse show" id="productInfo" data-bs-parent="#productPanels">
                                            <div className="accordion-body">
                                                <h6 className="fs-sm mb-2">Acá va la descripción</h6>
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