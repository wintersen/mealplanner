import React, { useState } from 'react';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        let signIn = {email: email, password: password};
        console.log(signIn);
    }

    return(
        <div className="container mx-auto">
            <div className="flex flex-col p-5 w-11/12 md:w-2/3 lg:w-1/2 bg-red-50 mx-auto rounded">
                <h3>Log In</h3>
                <form className="flex flex-col my-5" onSubmit={e => handleSubmit(e)}>
                    <input type="email" id="email" name="email" placeholder="Email" className="mb-5 rounded" onChange={e => setEmail(e.target.value)}/>
                    <input type="password" id="password" name="password" placeholder="Password" className="mb-5 rounded" onChange={e => setPassword(e.target.value)}/>
                    <button type="" className="rounded bg-red-300 shadow md:w-1/2 py-2 md:mx-auto">Log in</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn;