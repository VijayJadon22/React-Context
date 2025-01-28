import React from "react";
import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, setIsCartVisible, clearCart, total } = useCartContext();
  return (
    <div className="cartContainer">
      <div className="cartNav">
        <button onClick={clearCart} className="btn">
          Empty Cart
        </button>
        <h1>Shopping Cart</h1>
        <button onClick={() => setIsCartVisible(false)} className="btn">
          Close
        </button>
      </div>

      <div className="itemListContainer">
        {cartItems.length !== 0 ? (
          <div className="cardItemCard">
            <h3>Name</h3>

            <h3>Quantity</h3>
            <h3>Price</h3>
          </div>
        ) : null}
        {cartItems.length !== 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cardItemCard">
              <p>{item.name}</p>-<p>{item.quantity}</p>-
              <p>{item.price}&#x20B9;</p>
            </div>
          ))
        ) : (
          <h2>Cart is Empty</h2>
        )}

        {cartItems.length !== 0 ? (
          <div className="totalDiv">
            <h3 style={{ textAlign: "center" }}>
              Total Price: {total}&#x20B9;
            </h3>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
