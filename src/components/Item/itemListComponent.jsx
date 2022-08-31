import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemComponent from './itemComponent';

function ItemListComponent({ items, ...props }) {
    return (
        <Container>
            <Row>
                {items.map((item, idx) => {
                    return (
                        <Col key={idx} sm={3}>
                            <ItemComponent item={item} />
                        </Col>
                    )
                })}
            </Row>
            <br />
        </Container>
    )
}

export default ItemListComponent;