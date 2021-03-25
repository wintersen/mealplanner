import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCookbook } from '../../store/actions/cookbookActions';

const NewCookbookModal = ({isOpen, setModalOpen}) => {

    const [title, setTitle] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.length > 0){
            let cookbook = {title};
            dispatch(createCookbook(cookbook));
            setModalOpen(false);
            setIsEmpty(false);
        }
        else{
            setIsEmpty(true);
        }
    }

    return(
        <div className={ isOpen ? ("w-screen h-screen absolute z-20 top-0 left-0 bg-black bg-opacity-50 px-5 pt-10") : ('hidden')}>
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto md:h-1/3 p-7 md:p-5 bg-white rounded-lg flex flex-col justify-center items-center">
                <span className='text-xl text-center mb-5'>Create a new cookbook</span>
                <form className="flex flex-col w-full" onSubmit={e => handleSubmit(e)}>
                    <label htmlFor="title">Cookbook Title</label>
                    <input type="text" name="title" className="rounded" placeholder="The Best Cookbook" onChange={e => setTitle(e.target.value) }/>
                    <span className={isEmpty?"text-red-500 visible":"invisible"}>*You need a title!</span>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <button type="button" className="bg-gradient-to-r from-yellow-200 to-green-200 w-full rounded shadow" onClick={() => {setModalOpen(false); setIsEmpty(false)}}>
                            <div className="bg-yellow-200 h-full w-full py-3 px-4 bg-opacity-0 hover:bg-opacity-100 rounded transition ease-in-out duration-250">Cancel</div>
                        </button>
                        <button type="button" className="bg-gradient-to-r from-yellow-200 to-green-200 w-full rounded shadow disabled:opacity-50" onClick={e => handleSubmit(e)}>
                            <div className={"bg-yellow-200 h-full w-full py-3 px-4 bg-opacity-0 hover:bg-opacity-100 rounded transition ease-in-out duration-250"}>Save</div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewCookbookModal