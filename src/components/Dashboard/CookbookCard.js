import React from 'react';
import { Link } from 'react-router-dom';

const CookbookCard = () => {
    return(
        <div className="bg-white shadow-md rounded p-3">
            <div className="">
                <div>
                    <h3>Name of cookbook</h3>
                    <h4>Number of recipes</h4>
                    Owner
                    <Link to='/cookbooks'>Cookbook</Link>
                </div>
            </div>
            

        </div>
    )
}

export default CookbookCard