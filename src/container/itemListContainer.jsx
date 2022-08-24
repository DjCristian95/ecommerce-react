import Container from 'react-bootstrap/Container';
import ItemCountComponent from "../components/itemCountComponent";


const ItemListContainer = ({ greeting }) => {
    return (
        <Container>
            <h3>{greeting}</h3>
            <br />
            <h2>Titulo Producto</h2> {/* lo voy a migrar a un componente el titulo en un futuro */}
            <ItemCountComponent stock={5} initial={0} />
        </Container>
    )
}

export default ItemListContainer;