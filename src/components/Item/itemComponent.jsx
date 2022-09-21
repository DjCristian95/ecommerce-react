import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Container from "react-bootstrap/Container";
import ItemCountComponent from './itemCountComponent';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemComponent = ({title, thumbnail, currency_id, price, key, id}) => {
      
    return (
        <Container>
            <Card className="d-block text-center">
                <Card.Header className="bg-dark text-white">
                    <Card.Title>{title}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Image className="img-fluid d-block mx-auto" src={thumbnail} alt={""} width={"100px"} height={"100px"} />
                    <h5>{currency_id} {price}</h5>
                    <Link to={`/detalle/${id}`}><Button className="btn btn-primary px-4">Ver detalles</Button></Link>
                </Card.Body>
                <Card.Footer >
                    <ItemCountComponent stock={5} initial={1} />
                </Card.Footer>
            </Card>
            <br />
        </Container>
    )
}

export default ItemComponent;