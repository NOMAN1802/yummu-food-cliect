import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';


const ChefRecipes = () => {
    const {id} = useParams()
   const chefData = useLoaderData();
    const {chef_picture,chef_name,years_of_experience,number_of_recipes,bio} = chefData;
    console.log(chefData);
    return (
        <Card>
        {/* <Card.Img variant="top" src={}/> */}
        <Card.Body>
          <Card.Title>{chef_name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>  
    );
};

export default ChefRecipes;