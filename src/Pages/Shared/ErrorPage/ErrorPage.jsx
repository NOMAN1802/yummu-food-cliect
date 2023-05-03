import React from 'react';
import { FaRegFrown } from 'react-icons/fa';
import { Link, useRouteError } from 'react-router-dom';
import'./Error.css'
const ErrorPage = () => {
    const {error,status} =useRouteError()
    return (
        <div>
           <section className='d-flex align-items-center p-4 text-muted bg  error'>
            <div className='container d-flex align-items-center flex-column justify-content-center px-2 mx-auto my-3'>
               <FaRegFrown className='w-25 h-25 text-warning'></FaRegFrown>
            <div className=' text-center'>
                <h1 className='mb-3 fw-bolder text-warning'>
                <span className='text-info'>Error : </span>
                {status || 404}  
                </h1>
                <p className='text-lg fw-bold'>
            {error?.message}
          </p>
          <Link to='/' className='btn btn-danger'>
            Back to homepage
          </Link>
            </div>
            </div>
           </section> 
        </div>
    );
};

export default ErrorPage;

