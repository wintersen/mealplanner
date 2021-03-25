import React from 'react'
import { useHistory } from 'react-router'

const BackButton = () => {

    let history = useHistory();

    return(
        <div className="float-left m-5 p-1 rounded-full bg-green-500" onClick={() => history.goBack()}>
            <svg className="flex-shrink-0 h-7 w-7 text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </div>
    )
}

export default BackButton