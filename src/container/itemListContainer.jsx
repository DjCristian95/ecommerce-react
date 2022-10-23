import ItemListComponent from '../components/Item/itemListComponent';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";


const ItemListContainer = () => {
    const [items, setItems] = useState([])
    let { idCategoria } = useParams();

    const getItems = () => {
        try {
            const db = getFirestore();
            const itemDB = query(collection(db, "items"));
            const result = idCategoria
              ? query(itemDB, where("categoryId", "==", parseInt(idCategoria)))
              : itemDB;
            getDocs(result).then((snapshot) => {
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
    }, [idCategoria])

    return (
        <ItemListComponent items={items} />
    )
}

export default ItemListContainer;