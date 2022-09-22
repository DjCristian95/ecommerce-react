import React from "react";
import { useState } from "react";


const CartContext = React.createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        const existInCart = isInCart(item.id);
        if (existInCart) {
            const arrayCart = cart.filter((item) => item.id !== item.id);
            arrayCart.push(item);
            setCart(arrayCart);
        } else {
            setCart([...cart, item]);
        }
    }

    const removeItem = (item) => {
        setCart(cart.filter((itemAux) => itemAux.id !== item.id));
        setCart([]);
    }

    const isInCart = (itemId) => {
        return cart.find(item => item.id === itemId);
    }

    const clearItems = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearItems}}>
            {children}
        </CartContext.Provider>
    )

}

export {CartProvider, CartContext};