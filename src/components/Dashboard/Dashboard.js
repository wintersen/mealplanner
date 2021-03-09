import React from 'react';
import SideNav from '../Navbars/SideNav';


const Dashboard = () =>{
    return(
        <div className="flex-grow">
            <div className="h-full grid grid-cols-10">
                <div className="col-span-1">
                    <SideNav />
                </div>
                <div className="col-span-9 bg-gray-100 overflow auto p-5">

                    <h1>Scheduled Events</h1>
                    <div>events list</div>

                    <h1>Cookbooks</h1>
                    <div>cookbook list</div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard;