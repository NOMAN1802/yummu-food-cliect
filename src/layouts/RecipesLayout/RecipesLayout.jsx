import React from 'react';
import Header from '../../Pages/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';

const RecipesLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                
                <Row>
                    
                    <Col lg={9}>
                       <Outlet/>
                    </Col>
                    <Col lg = {3}>
                        
                        
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default RecipesLayout;