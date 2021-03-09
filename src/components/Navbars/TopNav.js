import React from 'react';
import { Link } from 'react-router-dom';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const TopNav = () => {
    return(
        <div className="w-screen flex bg-green-500 h-1/10 p-3">
            <div>
                <Link to="/dashboard">logo</Link>
            </div>
            <div className="flex-grow"></div>
            <SignedOutLinks />
            <SignedInLinks />
        </div>
    )
}

export default TopNav;