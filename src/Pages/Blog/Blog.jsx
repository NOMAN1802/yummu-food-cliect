import React from 'react';
import { Card } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const Blog = () => {
    return (
        <div className='container my-5'>
            <div>
               <h1 className='fw-bolder text-muted text-center'> Blog section</h1>

               <Marquee speed={100}>
    Some basic questions answer about React....
               </Marquee>
            </div>
            <div className='container'>
             <div className='row'>
                
                <div className='col-sm-12 col-lg-6 gap-2 my-4'>
               <Card className='w-100 h-100 shadow-lg p-3 mb-5 bg-white rounded'>
                    <Card.Title>
                        <p className='text-muted text-center'> Q1.Differences between uncontrolled and controlled components</p>
                    </Card.Title>
                    <Card.Text>
                        <p className='ps-2'><small className='text-muted'>Uncontrolled Components: <br />
                        1.It can manage state without depending external state management system.
                        <br />
                        2.Directly interact with DOM. 
                        <br />
                        3.Use input reference to interact with DOM.
                        <br />
                        4.Simpler to implement.
                        <br />
                        Controlled Components:
                        1.Relay on external state management to manage state.
                        <br />
                        2.The component's values are provided via props.
                        <br />
                        3.Components can enforce input validation and constraints before updating the state.
                        <br />
                        4.Complex to implement.
                        
                        </small></p>
                    </Card.Text>
                </Card>
               </div>
               <div className='col-sm-12 col-lg-6 gap-2 my-4'>
               <Card className='w-100 h-100 shadow-lg p-3 mb-5 bg-white rounded'>
                    <Card.Title>
                        <p className='text-muted text-center'>Q2.How to validate React props using PropTypes</p>
                    </Card.Title>
                    <Card.Text>
                        <p className='ps-2'><small className='text-muted'>By using PropTypes, you can define and enforce the expected types of props in your React components, which helps in catching potential bugs and makes your code more maintainable. <br />
                        Steps of validate React props using PropType.
                        <br />
                        1.Install PropTypes.
                        <br />
                        2.Import PropTypes.
                        <br />
                        3.Define prop types.
                        <br />
                        4.Validate props.
                        <br />
                        5.Usage of prop types
                        </small></p>
                    </Card.Text>
                </Card>
               </div>
               <div className='col-sm-12 col-lg-6 gap-2 my-4'>
               <Card className='w-100 h-100 shadow-lg p-3 mb-5 bg-white rounded'>
                    <Card.Title>
                        <p className='text-muted text-center'>Q3.Difference between nodejs and express.js</p>
                    </Card.Title>
                    <Card.Text>
                        <p className='ps-2'><small className='text-muted'>Node.js: <br />
                        It is a runtime environment of Javascript build on chrome V8 engine.It generally maintain the server side rather than client side.With Node.js, we can create web servers, command-line tools, real-time applications, and more. It has a vast ecosystem of libraries and modules available through npm (Node Package Manager) that simplify the development process.
                        <br />
                        Express js:
                        <br />
                        It is a flexible web application framework Node.js which build based on Node.js. Express.js simplifies common web development tasks such as routing, handling HTTP requests and responses, managing middleware, and serving static files. It follows a modular approach, allowing developers to add or remove functionalities using middleware, which are functions executed in the request-response cycle.
                        </small></p>
                    </Card.Text>
                </Card>
               </div>
               <div className='col-sm-12 col-lg-6 gap-2 my-4'>
               <Card className='w-100 h-100 shadow-lg p-3 mb-5 bg-white rounded'>
                    <Card.Title>
                        <p className='text-muted text-center'>Q4.What is a custom hook, and why will you create a custom hook?</p>
                    </Card.Title>
                    <Card.Text>
                        <p className='ps-2'><small className='text-muted '>Custom hook is a state full logical Javascript function for react component.Like Other Build in hook it start with use keyword. <br />
                        Reason of of create custom hook:
                        <br />
                        1.Reusability:It is reusable across multiple components. 
                        <br />
                        2.Abstraction:Provide a clean interface to interact with complex logic. 
                        <br />
                        3.Stateful logic in functional components.
                        <br />
                        4.Composition: Provide different sets of functionalities, making it easier to mix and match logic as needed.
                        <br />
                         </small></p>
                    </Card.Text>
                </Card>
               </div>
                

             </div>
            </div>
            
        </div>
    );
};

export default Blog;