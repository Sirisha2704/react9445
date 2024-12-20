// BurgerDet.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BurgerData } from '../Data/BurgerData'; // Adjust the import if needed
import { Card, Button, Toast,Navbar,Nav } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

function BurgerDet() {
  const { id } = useParams(); // Get the id from the URL
  const burger = BurgerData.find((item) => item.id === parseInt(id)); // Find the burger by id

  const [cartMessage, setCartMessage] = useState(""); // State to display cart message

  if (!burger) {
    return <div className="text-center mt-5">Burger not found!</div>; // Handle case when burger is not found
  }

  // Function to handle adding the burger to the cart
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(burger); // Add burger to cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage

    setCartMessage(`${burger.name} has been added to your cart!`);
    setTimeout(() => setCartMessage(""), 500); // Clear the message after 3 seconds
  };

  return (
    <div
      className="container-fluid"
      style={{
        background: 'linear-gradient(to right, #F26B0F, #FF7F50)',
        minHeight: '100vh',
        paddingBottom: '50px',
      }}
    >
      
      {/* Top Bar with Cart Icon */}
      <Navbar bg="dark" variant="dark" sticky="top" className="d-flex justify-content-between">
        <Navbar.Brand href="/" className="mx-auto">
          <h2 style={{ color: 'white', margin: '0' }}>Burger</h2>
        </Navbar.Brand>
        <Nav>
          <Link to="/cart">
            <Button variant="link" style={{ color: 'white', fontSize: '24px' }}>
              <FaShoppingCart />
              <span style={{ marginLeft: '10px' }}>Cart</span>
            </Button>
          </Link>
        </Nav>
      </Navbar>

      {/* Toast message for Add to Cart confirmation */}
      {cartMessage && (
        <Toast
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 9999,
          }}
        >
          <Toast.Body>{cartMessage}</Toast.Body>
        </Toast>
      )}

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: '100vh' }}
      >
        <Card
          className="shadow-lg rounded"
          style={{
            width: '90%',
            maxWidth: '750px',
            borderRadius: '15px',
            overflow: 'hidden',
          }}
        >
          <Card.Img
            variant="top"
            src={burger.img}
            alt={burger.name}
            style={{
              height: '400px',
              objectFit: 'cover',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
            }}
          />
          <Card.Body
            style={{
              backgroundColor: 'white',
              padding: '30px',
              borderTopLeftRadius: '0',
              borderTopRightRadius: '0',
            }}
          >
            <Card.Title
              className="text-center"
              style={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: '#333',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '15px',
              }}
            >
              {burger.name}
            </Card.Title>
            <Card.Text
              className="text-center"
              style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#FF7F50',
                marginBottom: '20px',
              }}
            >
              ₹{burger.price}
            </Card.Text>
            <Card.Text
              style={{
                fontSize: '18px',
                color: '#555',
                lineHeight: '1.6',
                textAlign: 'center',
                marginBottom: '30px',
              }}
            >
              {burger.description}
            </Card.Text>
            <div className="d-flex justify-content-center" style={{ gap: '20px' }}>
              <Link to="/burger">
                <Button
                  variant="outline-dark"
                  style={{
                    padding: '12px 30px',
                    fontWeight: 'bold',
                    borderRadius: '25px',
                    borderColor: '#FF7F50',
                    color: '#FF7F50',
                    backgroundColor: 'transparent',
                    transition: 'background-color 0.3s, color 0.3s, transform 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF7F50';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#FF7F50';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  Back to Burgers
                </Button>
              </Link>

              <Link to="/dashboard">
                <Button
                  variant="outline-dark"
                  style={{
                    padding: '12px 30px',
                    fontWeight: 'bold',
                    borderRadius: '25px',
                    borderColor: '#FF7F50',
                    color: '#FF7F50',
                    backgroundColor: 'transparent',
                    transition: 'background-color 0.3s, color 0.3s, transform 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF7F50';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#FF7F50';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  Back to Dashboard
                </Button>
              </Link>

              {/* Add to Cart Button */}
          
              <Button
                variant="warning"
                style={{
                  padding: '12px 30px',
                  fontWeight: 'bold',
                  borderRadius: '25px',
                  backgroundColor: '#FF7F50',
                  borderColor: '#FF7F50',
                  color: 'white',
                  transition: 'background-color 0.3s, color 0.3s, transform 0.3s',
                }}
                onClick={addToCart}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF4500';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF7F50';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Add to Cart
              </Button>
        
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default BurgerDet;
