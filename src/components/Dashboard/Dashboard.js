import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import SideNav from '../Navbars/SideNav';
import CookbookCard from './CookbookCard';
import EventCard from './EventCard';
import NewCookbookModal from './NewCookbookModal';
import RecipeSection from './RecipeSection';


const Dashboard = () => {

    useFirestoreConnect(['Cookbooks', 'Recipes']);
    const cookbooks = useSelector((state) => state.firestore.ordered.Cookbooks);

    const [cookbookModalOpen, setCookbookModalOpen] = useState(false);

    const cookbookCards = cookbooks && cookbooks.length ? (cookbooks.map(cb => {
        return ( <CookbookCard cookbook={cb} key={cb.id}/> )
    })) : ( <div> No cookbooks found. </div> )

    return(
        <div className="flex-grow">
            <NewCookbookModal isOpen={cookbookModalOpen} setModalOpen={setCookbookModalOpen}></NewCookbookModal>
            <div className="h-full grid grid-cols-10">
                <div className="hidden md:col-span-1">
                    <SideNav />
                </div>
                <div className="col-span-10 md:col-span-9 bg-gray-100 overflow auto p-5">
                    <section className="mb-10 max-h-1/2">
                        <div className="p-3">
                            <span>Scheduled Events</span>
                            <button type="button" className="bg-gradient-to-r from-yellow-200 to-green-200 ml-5  rounded shadow">
                                <div className="bg-yellow-200 h-full w-full py-1 px-2 bg-opacity-0 hover:bg-opacity-100 rounded transition ease-in-out duration-250">Add New Event</div>
                            </button>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <EventCard event={{id: '1'}}/>
                            <EventCard event={{id: '2'}}/>
                            <EventCard event={{id: '3'}}/>
                        </div>
                    </section>
                    <section className="max-h-1/2">
                        <div className="p-3">
                            <span>Cookbooks</span>
                            <button type="button" className="bg-gradient-to-r from-yellow-200 to-green-200 ml-5  rounded shadow">
                                <div className="bg-yellow-200 h-full w-full py-1 px-2 bg-opacity-0 hover:bg-opacity-100 rounded transition ease-in-out duration-250" onClick={() => setCookbookModalOpen(true)}>Add New Cookbook</div>
                            </button>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            { cookbookCards }
                        </div>
                    </section>
                    <section>
                        <div className="p-3">
                            <span>Recipes</span>
                            <Link to={"/addRecipe"}>
                                <button type="button" className="bg-gradient-to-r from-yellow-200 to-green-200 ml-5 rounded shadow">
                                    <div className="bg-yellow-200 h-full w-full py-1 px-2 bg-opacity-0 hover:bg-opacity-100 rounded transition ease-in-out duration-250">Add Recipe</div>
                                </button>
                            </Link>
                        </div>
                            <RecipeSection />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;