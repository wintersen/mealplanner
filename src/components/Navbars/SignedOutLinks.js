import React from 'react';
import { Link } from 'react-router-dom';

const SignedOutLinks = () => {
    return(
        <div>
            <Link to='/signup' className='mx-3 hover:text-white'>Sign Up</Link>
            <Link to='/login' className='mx-3 hover:text-white'>Log In</Link>
        </div>
    )
}

export default SignedOutLinks;