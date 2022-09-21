import React, {useContext} from "react";
import { useState } from "react";


const CartContext = React.createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart([...cart, item])
    }

    const removeItems = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{cart, addItem}}>
            {children}
        </CartContext.Provider>
    )

}

export default {CartProvider, CartContext};