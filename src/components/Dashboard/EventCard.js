import React from 'react';
import { useHistory } from 'react-router-dom';

const EventCard = ({event}) => {
    
    let history = useHistory();

    const handleClick = (id) => {
        history.push('/event/' + id);
    }

    return(
        <div className="bg-white shadow-md rounded p-3 cursor-pointer transition transform hover:-translate-y-1" onClick={() => handleClick(event.id)}>
            <div className="grid grid-cols-2">
                <div>
                    <h3>Name of event</h3>
                    <h4>Date of event</h4>
                </div>
                <div>
                    list of current recipes

                </div>
            </div>
            

        </div>
    )
}

export default EventCard