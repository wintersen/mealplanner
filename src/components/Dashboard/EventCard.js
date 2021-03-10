import React from 'react';

const EventCard = () => {
    return(
        <div className="bg-white shadow-md rounded p-3">
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