import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const handleLogin = event => {
        event.preventDefault();

        setSuccess('');
        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //  validation 
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one upper case');
            return;
        }
        else if(!/(?=.*[0-9].*[0-9])/.test(password)){
            setError('Please add at least 2 numbers');
            return;
        }
        else if(password.length < 6 ){
            setError('Please add at least 6 character in your password');
            return;
        }
       
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
                setError('');
                    event.target.reset();
                    setSuccess('User has been login successfully');
            })
            .catch(error => {
                console.error(error.message);
                setError('Email password does not matched');
            })
    }

    return (
        <Container className='w-25 mx-auto' style={{marginBottom: '150px',marginTop: '150px'}}>
            <h3 className='fw-bold'>Please <span className='text-primary'>Login</span></h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">
                <p>{success}</p>
                </Form.Text>
                <Form.Text className="text-danger">
                <p>{error}</p>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;