import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const ItemCountComponent = ({ stock, initial, handlerAddItem }) => {

  const [quantity, setQuantity] = useState(parseInt(initial));

  const addQuantity = () => {
    if (quantity + 1 <= stock) {
      setQuantity(quantity => quantity + 1);
    } else {
      alert("El stock disponible es: " + stock);
    }
  };

  const subtractQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity => quantity - 1);
    }
  };


  return (
    <Container>
      <h5>Stock: {stock} </h5>
    
      <div className="btn-group d-flex justify-content-between col-md-12" role="group" aria-label="Basic example">
        <Button className="btn btn-primary px-3" onClick={subtractQuantity}>
          <i className="fas fa-minus">-</i>
        </Button>
        <span className="text-center col-md-5 p-1">
          {quantity}
        </span>
        <Button className="btn btn-primary px-3" onClick={addQuantity}>
          <i className="fas fa-plus">+</i>
        </Button>
      </div>
      <Container className='mt-1'>
        <Button variant="outline-primary" className={'col-md-12'} onClick={() => {handlerAddItem(quantity)}}>Agregar al carrito</Button>
      </Container>
    </Container>
  );
}

export default ItemCountComponent;