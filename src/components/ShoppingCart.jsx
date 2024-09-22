import React from 'react';
import Inr from './Inr';
import '../style/B.css';

function ShoppingCart({ cartItems, setCartItems }) {
  const updateQuantity = (index, change) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity += change;

    // Ensure quantity doesn't go below 1
    if (updatedItems[index].quantity < 1) {
      updatedItems[index].quantity = 1;
    }

    setCartItems(updatedItems);
  };

  // Function to remove the specific item from the cart
  const removeItem = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="pipe">
          {cartItems.map((product, index) => {
            const totalPrice = product.price * product.quantity;

            return (
              <div key={index} className="cart-item">
                <h2>{product.name}</h2>
                <img src={product.image[0]?.url} alt={product.name} />
                <p className='pera'><Inr price={totalPrice} /></p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(index, -1)}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => updateQuantity(index, 1)}>+</button>
                </div>
                <p>Total Price: <Inr price={totalPrice} /></p>

                {/* Button to remove the specific item */}
                <button onClick={() => removeItem(index)} className="clear-cart">
                  Remove Item
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
