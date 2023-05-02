import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/homemade-sushi-cake-with-lightly-salted-salmon-avocado-soft-cheese-seaweed-christmas-surface_199073-274.jpg';
import second from '../../../assets/1000_F_209775206_lKDQpFottlBFixQRFudJYCOvI34RsanU.jpg';
import third from '../../../assets/delicious-fried-chicken-plate.jpg'
import './FoodZone.css'
const FoodZone = () => {
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4 mt-4">
        
        <Col>
          <Card>
            <Card.Img variant="top" className='card_img' src={first}/>
            <Card.Body>
              <Card.Title className='text-secondary fw-bold'>🍰 Divine Desserts</Card.Title>
              <Card.Text className='text-muted fs-6'>
              <small>Finish your journey with our divine desserts that will satisfy even the most discerning sweet tooth. From luscious chocolate indulgence to light and fruity creations, our desserts are masterpieces designed to sweet ending to your meal.</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" className='card_img' src={second}/>
            <Card.Body>
              <Card.Title className='text-secondary fw-bold'>🍹 Refreshing Beverages:</Card.Title>
              <Card.Text className='text-muted fs-6'>
             <small> Complement your meal with our refreshing selection of beverages. From handcrafted cocktails to freshly squeezed juices and a curated wine list,provide the perfect sweet ending to your meal. we have the perfect drink to enhance your dining experience.</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" className='card_img' src={third}/>
            <Card.Body>
              <Card.Title className='text-secondary fw-bold'>🍕 Gourmet Pizzas:</Card.Title>
              <Card.Text className='text-muted fs-6'>
              <small>Experience pizza perfection with our gourmet selection. Picture a thin, crispy crust adorned with a mosaic of premium toppings, baked to  each slice is an explosion of flavors that will make your taste buds sing with joy.</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
            
        </div>
    );
};

export default FoodZone;