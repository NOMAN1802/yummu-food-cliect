import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useState } from 'react';
import './Register.css'

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name,photo,email,password);


        //  validation 
       
         if(password.length < 6 ){
            setError('Please add at least 6 character in your password');
            return;
        }

            createUser(email, password)
                .then(result => {
                    const createdUser = result.user;
                    // console.log(createdUser);
                    setError('');
                    event.target.reset();
                    setSuccess('User has been created successfully');
                })
                .catch(error => {
                    console.error(error.message);
                    setError(error.message);

                })
        };
        const handleAccepted = event => {
            setAccepted(event.target.checked);
        }

        return (
            <Container className='w-25 mx-auto reg'>
                <h3 className='text-bolder'>Please <span className='text-primary'>Register</span></h3>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL </Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo Url" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            onClick={handleAccepted}
                            type="checkbox"
                            name='accept'
                            label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
                    </Form.Group>

                    <Button variant="primary" disabled={!accepted} type="submit">
                        Register
                    </Button>
                    <br />
                    <Form.Text className='text-secondary'>
                        Already Have An Account?
                        <Link to='/login'>Login</Link>
                    </Form.Text>
                    <Form.Text className='text-success'>
                        <p>{success}</p>
                    </Form.Text>
                    <Form.Text className='text-danger'>
                        <p >{error}</p>
                    </Form.Text>

                </Form>
            </Container>
        );
    };

    export default Register;