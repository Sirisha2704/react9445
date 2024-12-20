import React from 'react';
import { CoffeeData } from '../Data/CoffeeData';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';

function Coffee() {
  return (
    <div className='container-fluid p-0' style={{ backgroundColor: '#F26B0F' }}>
      {/* Fixed Topbar */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'white', color: 'black', padding: '10px 0', zIndex: 10 }}>
        <div className="container d-flex justify-content-between align-items-center">
          
          {/* Title */}
          <h2 className="mb-0" style={{ fontWeight: 'bold' }}>
            Our Coffee Menu
          </h2>
          
          {/* Back Button */}
          <Link to='/dashboard'>
            <Button variant="outline-dark" className="mb-0">
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content Section */}
      <div style={{ paddingTop: '80px' }}> {/* Space for fixed topbar */}
        {/* Coffee Cards */}
        <Row className="d-flex justify-content-center p-5">
          {CoffeeData.map((coffee) => {
            return (
              <Col sm={12} md={6} lg={4} className="mb-4" key={coffee.id}>
                <Card 
                  className="shadow-sm rounded " 
                  style={{ cursor: 'pointer', transition: 'transform 0.3s ease-in-out', height: "500px" }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  {/* Image with fixed height of 200px and consistent aspect ratio */}
                  <Card.Img 
                    variant="middle" 
                    src={coffee.img} 
                    alt={coffee.name}  
                   style={{ width: '100%', height: '300px', borderRadius: '10px' }}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: '20px', fontWeight: 'bold' }}>{coffee.name}</Card.Title>
                    <Card.Text>
                      <strong>Price:</strong> {coffee.price}
                    </Card.Text>
                    <Card.Text style={{ fontSize: '14px', color: '#6c757d' }}>
                      {coffee.description}
                    </Card.Text>
                    <Button 
                      variant="primary" 
                      as={Link} 
                      to={`/coffee/${coffee.id}`} 
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

export default Coffee;                  