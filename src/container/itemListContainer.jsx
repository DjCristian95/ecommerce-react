import ItemListComponent from '../components/Item/itemListComponent';
import { useState, useEffect } from 'react';


const ItemListContainer = () => {
    const [items, setItems] = useState([])

    const getItems = async () => {
        try {
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Ferrari');
            const data = await response.json();
            setItems(data.results);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getItems();
    }, [])

    return (
        <ItemListComponent items={items} />
    )
}

export default ItemListContainer;