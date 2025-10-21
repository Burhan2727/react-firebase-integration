// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
// import { auth } from '../../firebase/firebase.init';

const Register = () => {
    // useContext
    const {createUser} = use(AuthContext);
    // onsubmit function
    const handleRegister = (event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }
    // const handleRegister = (event)=>{
    //     event.preventDefault();
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then(result => {
    //         console.log(result.user)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }
    return (
        <div onSubmit={handleRegister} className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl mt-5">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Please Register!</h1>
        <form>
            <fieldset className="fieldset">
                {/* name field */}
          <label className="label">Name</label>
          <input type="text" className="input" name="name" placeholder="Name" />
                {/* email field */}
          <label className="label">Email</label>
          <input type="email" className="input" name="email" placeholder="Email" />
                {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        </form>
        <p>Already have an account? Please <Link to="/login" className='text-blue-500 hover:text-blue-800 underline'>Login</Link></p>
      </div>
    </div>
    );
};

export default Register;