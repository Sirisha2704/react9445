import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Cart() {
  // State to store the cart data
  const [cart, setCart] = useState([]);

  // Retrieve cart data from localStorage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // Parse the cart data
    }
  }, []);

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1); // Remove the item at the specified index
    setCart(updatedCart); // Update the state
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  // Function to handle checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
    } else {
      alert('Proceeding to checkout...');
      // You can redirect to the checkout page or handle the checkout logic here
    }
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
         
      {/* Back to Dashboard button */}
      <Link to="/dashboard">
        <button className="btn-back-dashboard">
          Back to Dashboard
        </button>
      </Link>

      {/* Display cart items */}
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              {/* Display item image */}
              {item.img && (
                <img
                  src={item.img}
                  alt={item.name}
                  className="cart-item-image"
                  style={{
                    height: '300px',
                    width: '400px',
                    objectFit: 'cover', // Changed from fit to cover for better aspect ratio
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                  }}
                />
              )}

              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="price">₹{item.price}</p>
                <button
                  className="btn-remove"
                  onClick={() => removeFromCart(index)} // Call remove function on click
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
   

      {/* Proceed to Checkout button */}
      <button
        id="checkoutBtn"
        onClick={handleCheckout}
        className="btn-checkout"
      >
        Proceed to Checkout
      </button>

    </div>
  );
}

export default Cart;
