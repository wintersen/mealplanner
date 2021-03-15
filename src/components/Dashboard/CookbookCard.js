import React from 'react';
import { useHistory } from 'react-router-dom';

const CookbookCard = () => {

    let history = useHistory();

    const handleClick = () => {
        history.push('/cookbooks');
    }

    return(
        <div className="bg-white shadow-md rounded p-3 cursor-pointer transition transform hover:-translate-y-1" onClick={ () => handleClick()}>
            <div className="">
                <div>
                    <h3>Name of cookbook</h3>
                    <h4>Number of recipes</h4>
                    Owner
                </div>
            </div>
            

        </div>
    )
}

export default CookbookCard