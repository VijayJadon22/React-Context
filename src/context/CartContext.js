import { createContext, useContext, useState } from "react";
import itemData from "../data"

const CartContext = createContext(null);

export const useCartContext = () => useContext(CartContext);


export const CartContextProvider = (props) => {
    const [data, setData] = useState(itemData);
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [isCartVisible, setIsCartVisible] = useState(false);

    console.log(data);

    const handleAddItem = (price) => {
        setTotal(total + price);
        setItem(item + 1);
    };
    const handleRemoveItem = (price) => {
        if (total > 0 && item > 0) {
            setTotal(total - price);
            setItem(item - 1);
        }
    };

    const clearCart = () => {
        setTotal(0);
        setItem(0);
    };

    const toggleCart = () => {
        setIsCartVisible(!isCartVisible);
    };
    return (
        <CartContext.Provider value={{ data, total, item, handleAddItem, handleRemoveItem, clearCart, toggleCart }}>
            {props.children}
        </CartContext.Provider>
    )
};