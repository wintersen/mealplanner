import React, { useState } from 'react';

const SignUp = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        let newAcct = {firstName: fname, lastName: lname, email: email, password: password};
        console.log(newAcct);
    }

    return(
        <div className="container mx-auto">
            <div className="flex flex-col p-5 w-11/12 md:w-2/3 lg:w-1/2 bg-red-50 mx-auto rounded">
                <h3>Sign Up</h3>
                <h4>Make this week's meal plan the quick and easy way!</h4>
                <form className="flex flex-col my-5" onSubmit={e => handleSubmit(e)}>
                    <input type="text" id="fname" name="fname" placeholder="First Name" className="mb-5 rounded" onChange={e => setFname(e.target.value)}/>
                    <input type="text" id="lname" name="lname" placeholder="Last Name" className="mb-5 rounded" onChange={e => setLname(e.target.value)}/>
                    <input type="email" id="email" name="email" placeholder="Email" className="mb-5 rounded" onChange={e => setEmail(e.target.value)}/>
                    <input type="password" id="password" name="password" placeholder="Password" className="mb-5 rounded" onChange={e => setPassword(e.target.value)}/>
                    <button type="" className="rounded bg-red-300 shadow md:w-1/2 py-2 md:mx-auto">Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;