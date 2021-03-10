import React from 'react';
import SideNav from '../Navbars/SideNav';
import CookbookCard from './CookbookCard';
import EventCard from './EventCard';


const Dashboard = () =>{
    return(
        <div className="flex-grow">
            <div className="h-full grid grid-cols-10">
                <div className="col-span-1">
                    <SideNav />
                </div>
                <div className="col-span-9 bg-gray-100 overflow auto p-5">
                    <section className="mb-10 max-h-1/2">
                        <div className="p-3">
                            <span>Scheduled Events</span>
                            <button type="button" className="bg-gradient-to-r from-yellow-200 to-green-200 ml-5  rounded shadow">
                                <div className="bg-yellow-200 h-full w-full py-1 px-2 bg-opacity-0 hover:bg-opacity-100 rounded transition ease-in-out duration-250">Add New Event</div>
                            </button>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <EventCard />
                            <EventCard />
                            <EventCard />
                        </div>
                    </section>
                    <section className="max-h-1/2">
                        <div className="p-3">
                            <span>Cookbooks</span>
                            <button type="button" className="bg-gradient-to-r from-yellow-200 to-green-200 ml-5  rounded shadow">
                                <div className="bg-yellow-200 h-full w-full py-1 px-2 bg-opacity-0 hover:bg-opacity-100 rounded transition ease-in-out duration-250">Add New Cookbook</div>
                            </button>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <CookbookCard />
                            <CookbookCard />
                            <CookbookCard />
                        </div>
                    </section>
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard;