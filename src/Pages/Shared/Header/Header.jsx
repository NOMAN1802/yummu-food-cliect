import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar className='container' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        
        <Navbar.Brand href="#home"><img style={{height: 45,width: 60 }} src={logo} alt="" /></Navbar.Brand> 
        <h3 className='mx-2 fw-bolder'>Yummy <span className='text-primary'>Food</span> </h3>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
         
            
            
            <Link  to="/" style={{ textDecoration:'none', marginRight: '10px',color:'gray',marginLeft: '20px'}}>Home</Link>
            
            <Link to="/blog" style={{ textDecoration:'none', marginRight: '10px',color:'gray',marginLeft: '20px'}}>Blog</Link>
            

            <Link to ="/"style={{ textDecoration:'none', marginRight: '10px',color:'gray',marginLeft: '20px'}}>
              Contact
            </Link>
          </Nav>
          <Nav className='menu'>
            
            <div> 
            <Link to ='/login'><button className='btn btn-secondary'>Login</button></Link>
            </div>
          </Nav>
         
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;