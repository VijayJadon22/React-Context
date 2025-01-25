import { createContext, useContext, useState } from "react";
import itemData from "../data";
import Cart from "../components/Cart";

const CartContext = createContext(null);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = (props) => {
  const [data, setData] = useState(itemData);
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddItem = (product) => {
    setTotal(total + product.price);
    setItem(item + 1);

    //update the items in cart
    const itemsInCart = [...cartItems];
    const itemIndex = itemsInCart.findIndex((prod) => prod.id === product.id);

    if (itemIndex !== -1) {
      itemsInCart[itemIndex].quantity += 1;
    } else {
      itemsInCart.push({
        quantity: 1,
        ...product,
      });
    }
    console.log(itemsInCart);
    setCartItems(itemsInCart);
  };

  const handleRemoveItem = (product) => {
    const itemsInCart = [...cartItems];
    const itemIndex = itemsInCart.findIndex((prod) => prod.id === product.id);

    if (itemIndex !== -1) {
      if (itemsInCart[itemIndex].quantity > 1) {
        itemsInCart[itemIndex].quantity -= 1;
      } else {
        itemsInCart.splice(itemIndex, 1);
      }

      setTotal(total - product.price);
      setItem(item - 1);
      console.log(itemsInCart);
      setCartItems(itemsInCart);
    }
  };

  const clearCart = () => {
    const value = prompt("Are you sure you want to clear cart");
    if (value.trim().toLowerCase() === "yes") {
      setTotal(0);
      setItem(0);
      setCartItems([]);
    }
  };

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };
  return (
    <CartContext.Provider
      value={{
        data,
        total,
        item,
        handleAddItem,
        handleRemoveItem,
        clearCart,
        toggleCart,
        cartItems,
        setIsCartVisible,
        clearCart,
      }}
    >
      {isCartVisible && <Cart />}
      {/* {!isCartVisible && props.children} */}
      {props.children}
    </CartContext.Provider>
  );
};
