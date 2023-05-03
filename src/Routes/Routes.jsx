import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../Pages/Home/Home';
import ChefRecipes from '../Pages/ChefRecipes/ChefRecipes';
import RecipesLayout from '../layouts/RecipesLayout/RecipesLayout';
import Category from '../Pages/Shared/Category/Category';
import LoginLayOut from '../layouts/LoginLayOut/LoginLayOut'
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";

import Terms from "../Pages/Shared/Terms/Terms";
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../Pages/Shared/ErrorPage/ErrorPage';


const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayOut></LoginLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/terms',
                element:<Terms></Terms>
            }
        ]
        

    },
    
    {
        path:'/',
        element:<Main></Main>,
        
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category',
                element:<Category></Category>,
                // loader:({params}) =>fetch(`http://localhost:5000/chefData/${params.id}`)
            }
        ]
    },
    {
        path:'/chefData',
        element:<RecipesLayout></RecipesLayout>,
        children:[
            {
                path:':id',
                element:<PrivateRoute>
                    <ChefRecipes></ChefRecipes>
                </PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/chefData/${params.id}`)
            }
        ]

    }
])
export default router;