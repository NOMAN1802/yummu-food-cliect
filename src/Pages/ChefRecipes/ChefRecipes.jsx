import React, { useEffect, useState } from 'react';
import {  Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ChefRecipes.css'
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';


const ChefRecipes = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  
  useEffect(() => {
    fetch(`https://yummy-food-server.vercel.app/chefData/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);
  console.log(details)
  const handleClick = () => {
    setIsButtonDisabled(true);

    // Simulating an asynchronous action
    setTimeout(() => {
      // Enable the button after the action is completed
      setIsButtonDisabled(false);
    }, 60000);
  };

    return (     
       <div>
          <div className='d-flex gap-5'>
          <Card className='w-50' style={{marginTop: '50px', marginBottom: "50px"}}>
            
            <Card.Img  variant="top" src={details.chef_picture}/>
            <Card.Title className='title'>{details.chef_name}</Card.Title>
          </Card> 
          <div className='w-50' style={{marginTop: '50px', marginBottom: "50px"}}>
            <h4 className='text-secondary fw-bolder'>Name:</h4>
            <p><small className='text-danger-emphasis'>{details.chef_name}</small></p>      
            <h4 className='text-secondary fw-bolder'>Biography:</h4>
            <p><small className='text-danger-emphasis'>{details.bio}</small></p>
            <h4 className='text-secondary fw-bolder'>Experience:</h4>
            <p><small className='text-danger-emphasis'>{details.years_of_experience} years</small></p>
            <h4 className='text-secondary fw-bolder'>Number of recipes:</h4>
            <p><small className='text-danger-emphasis'>{details.number_of_recipes}</small></p>
         </div> 
          </div>
          <div className='my-5 d-flex gap-4'>
             
          <Card className='shadow-lg p-3 mb-5 bg-white rounded'>

            <Card.Title>
            <h4 className='text-secondary fw-bolder text-center'>Recipes Details</h4>
            </Card.Title>
            <Card.Text>
                
                <p className='text-danger-emphasis fw-bolder ms-2'>Main Recipe:<small className='ms-2'>{details.recipe_name}</small></p>
                <p className='text-danger-emphasis fw-bolder ms-2'>Ingredients:</p>
                <div className='ms-3 text-muted'>
                <p><small>{details?.ingredients}</small></p>
                </div>
                
                <p className='text-danger-emphasis fw-bolder ms-2'>Cooking Processes:</p>
                <p><small>{details.cooking_method}</small></p>
                
            </Card.Text>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={details.rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <span className='ms-2 text-center'>{details.rating}</span>
                </div>
                <div>
                    <button className=' btn btn-warning' onClick={handleClick} disabled={isButtonDisabled}>{isButtonDisabled ? 'Added ' : 'Favorite'}</button>
                    
                </div>
            </Card.Footer>
          </Card>
          <Card className='shadow-lg p-3 mb-5 bg-white rounded'>

            <Card.Title>
            <h4 className='text-secondary fw-bolder text-center'>Recipes Details</h4>
            </Card.Title>
            <Card.Text>
                
                <p className='text-danger-emphasis fw-bolder ms-2'>Desserts Item:<small className='ms-2'>{details.desserts_recipe_name}</small></p>
                <p className='text-danger-emphasis fw-bolder ms-2'>Ingredients:</p>
                <div className='ms-3 text-muted'>
                <p><small>{details?.desserts_ingredients}</small></p>
                </div>
                
                <p className='text-danger-emphasis fw-bolder ms-2'>Cooking Processes:</p>
                <p><small>{details.desserts_cooking_method}</small></p>
                
            </Card.Text>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={details.rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <span className='ms-2 text-center'>{details.rating}</span>
                </div>
                <div>
                    <button className=' btn btn-warning' onClick={handleClick} disabled={isButtonDisabled}>{isButtonDisabled ? 'Added ' : 'Favorite'}</button>
                    
                </div>
            </Card.Footer>
          </Card>
          <Card className='shadow-lg p-3 mb-5 bg-white rounded'>

            <Card.Title>
            <h4 className='text-secondary fw-bolder text-center'>Recipes Details</h4>
            </Card.Title>
            <Card.Text>
                
                <p className='text-danger-emphasis fw-bolder ms-2'>Snacks Recipe:<small className='ms-2'>{details.snacks_name}</small></p>
                <p className='text-danger-emphasis fw-bolder ms-2'>Ingredients:</p>
                <div className='ms-3 text-muted'>
                <p><small>{details?.snacks_ingredients}</small></p>
                </div>
                
                <p className='text-danger-emphasis fw-bolder ms-2'>Cooking Processes:</p>
                <p><small>{details.snacks_cooking_method}</small></p>
                
            </Card.Text>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={details.rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <span className='ms-2 text-center'>{details.rating}</span>
                </div>
                <div>
                    <button className=' btn btn-warning' onClick={handleClick} disabled={isButtonDisabled}>{isButtonDisabled ? 'Added ' : 'Favorite'}</button>
                    
                </div>
            </Card.Footer>
          </Card>
          </div>

       </div>
    );
};

export default ChefRecipes;