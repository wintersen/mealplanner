import React from 'react';
import { useHistory } from 'react-router-dom';

const CookbookCard = ({cookbook}) => {

    let history = useHistory();
    
    const handleClick = () => {
        history.push('/cookbook/' + cookbook.id);
    }

    return(
        <div className="bg-white shadow-md rounded p-3 cursor-pointer transition transform hover:-translate-y-1" onClick={ () => handleClick()}>
            <div className="">
                <div>
                    <h3>{cookbook.title}</h3>
                    <h4>Number of recipes</h4>
                    {cookbook.owner}
                </div>
            </div>
            

        </div>
    )
}

export default CookbookCard