import React from 'react';
import './Footer.css'
import { FaFacebook,FaGooglePlusG,FaYoutube } from 'react-icons/fa';
const Footer = () => {
    
    return (
        <div className='footer bg-secondary text-white'>
            <div className='d-flex text-white'>
             <div className='w-25'>
             <p className='fw-bold'>Site Links</p>
                <p><small>Contact Us</small></p>
                <p><small>About Us</small></p>
                <p><small>Blog</small></p>
                
                </div>
             
             <div className='w-25'>
             <p className='fw-bold'>Site Links</p>
                  <p><small>Promotion</small></p>
                  <p><small>Career</small></p>
                  <p><small>FAQ</small></p>
                  </div>
             <div className='w-25'>
             <p className='fw-bold'>Sponsored by</p>
                 <p><small>Seven Spices</small></p>
                 <p><small> Farmhouse Burger</small></p>
                 <p><small>KFC</small></p>
             </div>
             <div className='w-25'>
             <p className='fw-bold'>Social media</p>
                 <p><FaFacebook></FaFacebook></p>
                 <p><FaGooglePlusG></FaGooglePlusG></p>
                 <p> <FaYoutube></FaYoutube></p>
             </div>
             
            </div>
            <small className='text-center text-white'>CopyRight<span>©</span>2023.All rights reserved</small>
        </div>
        
    );
};

export default Footer;