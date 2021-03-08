import React from 'react';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const TopNav = () => {
    return(
        <div className="w-screen flex bg-green-500 p-3">
            <div>
                logo
            </div>
            <div className="flex-grow"></div>
            <SignedOutLinks />
            <SignedInLinks />
        </div>
    )
}

export default TopNav;