import ItemDetailComponent from '../components/Item/itemDetailComponent';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    let {idProducto} = useParams();

    const getItem = async () => {
        try {
            const db = getFirestore();
            const itemBD = doc(db, "items", idProducto);
            getDoc(itemBD).then((snapshot) => {
                if (snapshot.exists()) {
                    setItem({id: snapshot.id, ...snapshot.data()});
                }
            });
        } catch (e) {
            console.log(e);
        }            
    }

    useEffect(() => {
        getItem();
    }, [])

    return (
       <ItemDetailComponent item={item} />
    )
}

export default ItemDetailContainer;