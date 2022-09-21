import React from "react";
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
        <CartContext.Provider value={{cart, addItem, removeItems}}>
            {children}
        </CartContext.Provider>
    )

}

export {CartProvider, CartContext};