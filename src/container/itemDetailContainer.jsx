import ItemDetailComponent from '../components/Item/itemDetailComponent';
import { useState, useEffect } from 'react';


const ItemDetailContainer = () => {
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
       <ItemDetailComponent item={items[0]} />
    )
}

export default ItemDetailContainer;