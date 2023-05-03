import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.config';


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const[user,setUser] = useState(null);
    const auth = getAuth(app);

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
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn =() =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const LoggedInUser = result.user;
            console.log(LoggedInUser);
            setUser(LoggedInUser)
            
        })
        .catch(error =>{
            console.log('error',error.message);
        })
    }

    const handleSingOut = () =>{
        signOut(auth)
        .then(result =>{
            console.log(result);
            setUser(null);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <Container className='w-25 mx-auto' style={{marginBottom: '100px',marginTop: '100px'}}>
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
            <div>
                <h4 className='text-muted fw-bolder' style={{marginLeft: '25px'}}>Or</h4>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <br />
                <Button variant="outline-secondary"><FaGithub></FaGithub> Login with Github</Button>
            </div>
        </Container>
        
    );
};

export default Login;