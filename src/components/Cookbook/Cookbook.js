import React from 'react';
import RecipeCard from './RecipeCard';

const Cookbook = () => {
    return(
        <div className="bg-gray-100 h-full">
            <h1>Title of cookbook</h1>
            <h2>Author</h2>
            <h3>Number of recipes total</h3>
            <div className="grid grid-cols-4">
                <div className="col-span-3 mx-7">
                    <div className="grid grid-cols-3 gap-7">
                        <RecipeCard recipe={{name: 'A', tags:'yum', id:'0'}} />
                        <RecipeCard recipe={{name: 'B', tags:'yum', id:'1'}} />
                        <RecipeCard recipe={{name: 'C', tags:'yum', id:'2'}} />
                        <RecipeCard recipe={{name: 'D', tags:'yum', id:'3'}} />
                    </div>
                </div>
                <div className="col-span-1">recipe filters</div>
            </div>
        </div>
    )
}

export default Cookbook;