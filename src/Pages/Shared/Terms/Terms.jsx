import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container mt-4'>
            <h2>Our terms and conditions</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi doloribus dolores blanditiis. Aperiam enim magni, deserunt amet quaerat quos, exercitationem error dolores ad ipsa explicabo nesciunt, modi minima recusandae eos.
                <p>Go back to<Link to= '/register'>Register</Link></p>
            </p>
        </div>
    );
};

export default Terms;