import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';



const Header = () => {

  const {user, logOut} = useContext(AuthContext)

  const handleLogOut =()=>{
    logOut()
    .then()
    .catch(error =>{
      console.log(error);
    })
  }
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
         
            
          <Nav>
            {user && <FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle>}
            
            { user?
              <Button onClick={handleLogOut} variant="secondary">Logout</Button>:
              <Link to ='/login'>
              <Button variant="secondary">Login</Button>
              </Link>
            }
           
          </Nav>
          
         
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;