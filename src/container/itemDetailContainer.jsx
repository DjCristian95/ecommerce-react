import ItemDetailComponent from '../components/Item/itemDetailComponent';
import { useState, useEffect, useParams } from 'react';


const ItemDetailContainer = (key) => {

    const [items, setItems] = useState([]);
    let {idProducto} = useParams();

    const getItems = async () => {
        try {
            const response = await fetch('https://api.mercadolibre.com/items/${idProducto}');
            const data = await response.json(); 
            setItems(data); 
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getItems();
    }, [])

    return (
       <ItemDetailComponent item={items} />
    )
}

export default ItemDetailContainer;