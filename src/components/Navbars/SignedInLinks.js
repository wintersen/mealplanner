import React from 'react';
import { Link } from 'react-router-dom';

const SignedInLinks = () => {
    return(
        <div>
            <Link to='/logout' className='mx-3 hover:text-white'>Log Out</Link>
        </div>
    )
}

export default SignedInLinks;