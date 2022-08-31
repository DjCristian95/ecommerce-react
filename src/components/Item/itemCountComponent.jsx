import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const ItemCountComponent = ({ stock, initial }) => {

  const [quantity, setQuantity] = useState(parseInt(initial));

  const addQuantity = () => {
    if (quantity + 1 <= stock) {
      setQuantity(quantity => quantity + 1);
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
    
      <div class="btn-group" role="group" aria-label="Basic example">
        <Button className="btn btn-primary px-3" onClick={subtractQuantity}>
          <i className="fas fa-minus">-</i>
        </Button>

        <input className="text-center col-md-6" type={'number'} value={quantity} />

        <Button className="btn btn-primary px-3" onClick={addQuantity}>
          <i className="fas fa-plus">+</i>
        </Button>
      </div>
      <Container className='mt-1'>
        <Button variant="outline-primary" className={'col-md-12'}>Agregar al carrito</Button>
      </Container>
      
    </Container>
  );
}

export default ItemCountComponent;