import React, { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';



const Header = () => {

  const [showEmail, setShowEmail] = useState(false);
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut =()=>{
    logOut()
    .then()
    .catch(error =>{
      console.log(error);
    })
  }
  const handleMouseEnter = () => {
    setShowEmail(true);
  };

  const handleMouseLeave = () => {
    setShowEmail(false);
  };
    return (
        <div>
            <Navbar className='container' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        
        <Navbar.Brand href="#home"><img style={{height: 45,width: 60 }} src={logo} alt="" /></Navbar.Brand> 
        <h3 className='mx-2 fw-bolder'>Yummy <span className='text-primary'>Food</span> </h3>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
         
            
            
            <NavLink  to="/"  style={{ textDecoration:'none', marginRight: '10px',color:'gray',marginLeft: '20px'}} end>Home</NavLink>
            
            <NavLink to="/blog" style={{ textDecoration:'none', marginRight: '10px',color:'gray',marginLeft: '20px'}} end>Blog</NavLink>
            

            <NavLink to ="/"style={{ textDecoration:'none', marginRight: '10px',color:'gray',marginLeft: '20px'}} end>
              Contact
            </NavLink>
          </Nav>
         
            
          <Nav>
            {user && <div className='icon_person'onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> <div className='d-flex'><FaUserCircle style={{fontSize: '2rem ', marginRight: '20px'}}></FaUserCircle>{showEmail && <p className='icon_person'>{user.email}</p>}</div>
            </div>}
            
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