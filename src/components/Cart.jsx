import React from "react";

const Cart = (props) => {
  const { items, setIsCartVisible, clearCart } = props;
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
        {items.length !== 0 ? (
          <div className="cardItemCard">
            <h3>Name</h3>

            <h3>Quantity</h3>
            <h3>Price</h3>
          </div>
        ) : null}
        {items.length !== 0 ? (
          items.map((item) => (
            <div key={item.id} className="cardItemCard">
              <p>{item.name}</p>-<p>{item.quantity}</p>-
              <p>{item.price}&#x20B9;</p>
            </div>
          ))
        ) : (
          <h2>Cart is Empty</h2>
        )}

        {items.length !== 0 ? (
          <div className="totalDiv">
            <h3 style={{ textAlign: "center" }}>Total Price: 1100&#x20B9;</h3>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
