import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaCoffee, FaHamburger, FaPizzaSlice, FaCookieBite, FaShoppingCart } from 'react-icons/fa'; 
import { LuDessert } from "react-icons/lu";
import { CoffeeData } from './Data/CoffeeData';
import { BurgerData } from './Data/BurgerData';
import { PizzaData } from './Data/PizzaData';
import { PastaData } from './Data/PastaData';
import { DessertData } from './Data/DessertData';

function Dashboard() {
  const navigate = useNavigate();
  const display = CoffeeData.slice(0, 4);
  const display1 = BurgerData.slice(0, 4);
  const display2 = PizzaData.slice(0, 4);
  const display3 = PastaData.slice(0, 4);
  const display4 = DessertData.slice(0, 4);

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user'); // Remove user data or token from storage
    navigate('/react9445'); // Redirect to login page after logout
  };

  // Define the menu items and their corresponding routes
  const menuItems = [
    { icon: <FaCoffee />, label: "Coffee", link: "/coffee" },
    { icon: <FaHamburger />, label: "Burger", link: "/burger" },
    { icon: <FaPizzaSlice />, label: "Pizza", link: "/pizza" },
    { icon: <FaCookieBite />, label: "Pasta", link: "/pasta" },
    { icon: <LuDessert />, label: "Dessert", link: "/dessert" },
    { icon: <FaShoppingCart />, label: "Cart", link: "/cart", size: "sm" }
  ];

  return (
    <div className="dash" style={{minHeight: "100vh", position: "relative" }}>
      {/* Logout Button - Positioned at the top right */}
      <div style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        zIndex: "1000",
      }}>
        <Link to={"/react9445"}>
        <Button
          variant="danger"
          onClick={handleLogout}
          style={{
            fontWeight: 'bold',
            padding: '10px 20px',
            borderRadius: '25px',
            backgroundColor: '#dc3545',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c82333'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dc3545'}
        >
          Logout
        </Button>
        </Link>
      </div>

      {/* Menu Section */}
      <div className="container-fluid bg-dark text-white p-4 rounded shadow-lg mb-4">
        <h4 className="mb-4" style={{ fontWeight: 'bold', fontSize: '24px' }}>Menu for You...</h4>
        <Row className="d-flex justify-content-center">
          {menuItems.map((item, index) => (
            <Col key={index} sm={4} md={2} className="mb-3">
              <Link to={item.link} className="text-decoration-none text-dark">
                <Card
                  className="shadow-sm p-2 rounded"
                  style={{
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div className="me-3" style={{ fontSize: '30px' }}>{item.icon}</div>
                    <h6 style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.label}</h6>
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>

      {/* Main Content Section */}
      <div className="container-fluid text-center">
        <Row>
          <Col sm={12} className="bg-dark text-white p-5 d-flex flex-wrap justify-content-around">
            <div className="img p-1 rounded mb-4" style={{ borderRadius: '10px' }}>
              <h5 style={{ fontWeight: 'bold', fontSize: '30px' }}>Today's Specials</h5>
              <p style={{ fontSize: '18px' }}>Check out our specials for today! Choose your favorite dish from the menu and enjoy your meal.</p>
            </div>

            {/* Coffee Specials Section */}
            <div className="d-flex flex-wrap justify-content-start p-1">
              {display.map((e, index) => (
                <div
                  className="border p-3 m-2 bg-light rounded shadow-lg"
                  key={index}
                  style={{
                    maxWidth: '250px',
                    width: '100%',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <img src={e.img} alt={e.name} style={{ width: '100%', height: '200px', borderRadius: '10px' }} />
                  <h6 className="mt-2" style={{ fontSize: '18px', fontWeight: 'bold' }}>{e.name}</h6>
                  <p>{e.price}</p>
                  <p style={{ fontSize: '14px', color: '#555' }}>{e.description}</p>
                  <Button
                    variant="primary"
                    as={Link}
                    to={`/coffee/${e.id}`}
                    className="w-100"
                    style={{
                      padding: '12px 0',
                      fontWeight: 'bold',
                      borderRadius: '25px',
                      transition: 'background-color 0.3s ease',
                      backgroundColor: '#FF7F50',
                      border: 'none',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF4500'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF7F50'}
                  >
                    View Details
                  </Button>
                </div>
              ))}
            </div>

            <Link to="/coffee" className="text-white mt-3" style={{ display: 'block', textAlign: 'center', fontWeight: 'bold' }}>
              <Button variant="outline-light" size="lg">View All Coffees</Button>
            </Link>

            <div className="d-flex flex-wrap justify-content-start p-1">
              {display1.map((e, index) => (
                <div
                  className="border p-3 m-2 bg-light rounded shadow-lg"
                  key={index}
                  style={{
                    maxWidth: '250px',
                    width: '100%',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <img src={e.img} alt={e.name} style={{ width: '100%', height: '200px', borderRadius: '10px' }} />
                  <h6 className="mt-2" style={{ fontSize: '18px', fontWeight: 'bold' }}>{e.name}</h6>
                  <p>{e.price}</p>
                  <p style={{ fontSize: '14px', color: '#555' }}>{e.description}</p>
                  <Button
                    variant="primary"
                    as={Link}
                    to={`/burger/${e.id}`}
                    className="w-100"
                    style={{
                      padding: '12px 0',
                      fontWeight: 'bold',
                      borderRadius: '25px',
                      transition: 'background-color 0.3s ease',
                      backgroundColor: '#FF7F50',
                      border: 'none',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF4500'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF7F50'}
                  >
                    View Details
                  </Button>
                </div>
              ))}
            </div>

            <Link to="/burger" className="text-white mt-3" style={{ display: 'block', textAlign: 'center', fontWeight: 'bold' }}>
              <Button variant="outline-light" size="lg">View All Burger</Button>
            </Link>

            <div className="d-flex flex-wrap justify-content-start p-1">
              {display2.map((e, index) => (
                <div
                  className="border p-3 m-2 bg-light rounded shadow-lg"
                  key={index}
                  style={{
                    maxWidth: '250px',
                    width: '100%',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <img src={e.img} alt={e.name} style={{ width: '100%', height: '200px', borderRadius: '10px' }} />
                  <h6 className="mt-2" style={{ fontSize: '18px', fontWeight: 'bold' }}>{e.name}</h6>
                  <p>{e.price}</p>
                  <p style={{ fontSize: '14px', color: '#555' }}>{e.description}</p>
                  <Button
                    variant="primary"
                    as={Link}
                    to={`/pizza/${e.id}`}
                    className="w-100"
                    style={{
                      padding: '12px 0',
                      fontWeight: 'bold',
                      borderRadius: '25px',
                      transition: 'background-color 0.3s ease',
                      backgroundColor: '#FF7F50',
                      border: 'none',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF4500'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF7F50'}
                  >
                    View Details
                  </Button>
                </div>
              ))}
            </div>

            <Link to="/pizza" className="text-white mt-3" style={{ display: 'block', textAlign: 'center', fontWeight: 'bold' }}>
              <Button variant="outline-light" size="lg">View All Pizza</Button>
            </Link>



 {/* Coffee Specials Section */}
 <div className="d-flex flex-wrap justify-content-start p-1">
              {display3.map((e, index) => (
                <div
                  className="border p-3 m-2 bg-light rounded shadow-lg"
                  key={index}
                  style={{
                    maxWidth: '250px',
                    width: '100%',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <img src={e.img} alt={e.name} style={{ width: '100%', height: '200px', borderRadius: '10px' }} />
                  <h6 className="mt-2" style={{ fontSize: '18px', fontWeight: 'bold' }}>{e.name}</h6>
                  <p>{e.price}</p>
                  <p style={{ fontSize: '14px', color: '#555' }}>{e.description}</p>
                  <Button
                    variant="primary"
                    as={Link}
                    to={`/pasta/${e.id}`}
                    className="w-100"
                    style={{
                      padding: '12px 0',
                      fontWeight: 'bold',
                      borderRadius: '25px',
                      transition: 'background-color 0.3s ease',
                      backgroundColor: '#FF7F50',
                      border: 'none',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF4500'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF7F50'}
                  >
                    View Details
                  </Button>
                </div>
              ))}
            </div>

            <Link to="/pasta" className="text-white mt-3" style={{ display: 'block', textAlign: 'center', fontWeight: 'bold' }}>
              <Button variant="outline-light" size="lg">View All Pasta</Button>
            </Link>


 {/* Coffee Specials Section */}
 <div className="d-flex flex-wrap justify-content-start p-1">
              {display4.map((e, index) => (
                <div
                  className="border p-3 m-2 bg-light rounded shadow-lg"
                  key={index}
                  style={{
                    maxWidth: '250px',
                    width: '100%',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <img src={e.img} alt={e.name} style={{ width: '100%', height: '200px', borderRadius: '10px' }} />
                  <h6 className="mt-2" style={{ fontSize: '18px', fontWeight: 'bold' }}>{e.name}</h6>
                  <p>{e.price}</p>
                  <p style={{ fontSize: '14px', color: '#555' }}>{e.description}</p>
                  <Button
                    variant="primary"
                    as={Link}
                    to={`/dessert/${e.id}`}
                    className="w-100"
                    style={{
                      padding: '12px 0',
                      fontWeight: 'bold',
                      borderRadius: '25px',
                      transition: 'background-color 0.3s ease',
                      backgroundColor: '#FF7F50',
                      border: 'none',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF4500'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF7F50'}
                  >
                    View Details
                  </Button>
                </div>
              ))}
            </div>

            <Link to="/dessert" className="text-white mt-3" style={{ display: 'block', textAlign: 'center', fontWeight: 'bold' }}>
              <Button variant="outline-light" size="lg">View All Dessert</Button>
            </Link>
           

          </Col>
        </Row>
      </div>
    </div>
    
  );
}

export default Dashboard;
