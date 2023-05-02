import React, { useEffect, useState } from 'react';
import {  Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ChefRecipes.css'


const ChefRecipes = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  
  useEffect(() => {
    fetch(`http://localhost:5000/chefData/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);
  console.log(details)

    return (     
       <div>
          <div className='d-flex gap-5'>
          <Card className='w-50' style={{marginTop: '50px', marginBottom: "50px"}}>
            
            <Card.Img  variant="top" src={details.chef_picture}/>
            <Card.ImgOverlay><Card.Title className='title'>{details.chef_name}</Card.Title></Card.ImgOverlay>
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

       </div>
    );
};

export default ChefRecipes;