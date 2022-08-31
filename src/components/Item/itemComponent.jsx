import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Container from "react-bootstrap/Container";
import ItemCountComponent from './itemCountComponent';

const ItemComponent = ({ item }) => {

    return (
        <Container>
            <Card>
                <Card.Header className="bg-dark text-white">
                    <Card.Title>{item.title}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Image src={item.thumbnail} alt={""} width={"100px"} height={"100px"} />
                    <h5>{item.currency_id} {item.price}</h5>
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