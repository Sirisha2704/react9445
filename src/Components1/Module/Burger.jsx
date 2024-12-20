import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { BurgerData } from '../Data/BurgerData'; // Assuming your data file is in the 'Data' folder

function Burger() {
  return (
    <div className="container-fluid p-0" style={{ backgroundColor: '#F26B0F' }}>
      {/* Fixed Topbar */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'white', color: 'black', padding: '15px 0', zIndex: 10 }}>
        <div className="container d-flex justify-content-between align-items-center">
          {/* Title */}
          <h2 className="mb-0" style={{ fontWeight: 'bold', fontSize: '28px', color: '#333' }}>
            Our Burger Menu
          </h2>

          {/* Back Button */}
          <Link to="/dashboard">
            <Button variant="outline-dark" className="mb-0" style={{ fontWeight: 'bold', borderRadius: '25px', padding: '8px 20px' }}>
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content Section */}
      <div style={{ paddingTop: '80px' }}> {/* Space for fixed topbar */}
        {/* Burger Cards */}
        <Row className="d-flex justify-content-center p-5">
          {BurgerData.map((burger) => {
            return (
              <Col sm={12} md={6} lg={4} className="mb-4" key={burger.id}>
                <Card
                  className="shadow-lg rounded"
                  style={{ cursor: 'pointer', transition: 'transform 0.3s ease-in-out', height: 'auto', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  {/* Image with full width of card */}
                  <Card.Img
                    variant="top"
                    src={burger.img}
                    alt={burger.name}
                    style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: '22px', fontWeight: 'bold', color: '#333' }}>{burger.name}</Card.Title>
                    <Card.Text style={{ fontSize: '16px', color: '#555' }}>
                      <strong>Price:</strong> {burger.price}
                    </Card.Text>
                    <Card.Text style={{ fontSize: '14px', color: '#777' }}>
                      {burger.description}
                    </Card.Text>
                    <Button
                      variant="primary"
                      as={Link}
                      to={`/burger/${burger.id}`}
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
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Burger;
