import ItemListComponent from '../components/Item/itemListComponent';
import { useState, useEffect } from 'react';
import { getFirestore, getDocs, collection } from "firebase/firestore";


const ItemListContainer = () => {
    const [items, setItems] = useState([])

    const getItems = () => {
        try {
            const db = getFirestore();
            const itemDB = collection(db, "items");
            getDocs(itemDB).then((snapshot) => {
                const docs = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    }));
                    setItems(docs);
                });
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