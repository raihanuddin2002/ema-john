import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {signInWithGoogle} = useAuth();
    
    return (
        <div>
            <div className="container border border-black p-4 text-start my-5">
            <form>
                <div className="mb-3">
                    <h2 className="text-center text-dark fw-bold">Register: Create Account</h2>
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputRePassword1" className="form-label">Re-Password</label>
                    <input type="password" className="form-control" id="exampleInputRePassword1" />
                </div>

                <button type="submit" className="btn btn-dark">Register </button>
            </form> 

            <p className="mt-2"><Link className="text-decoration-none m-1 rounded-1 text-primary fw-bold" to="/login">Already Registered?</Link></p>

            <div>
                <h6 className="">------or------ </h6>
                <button onClick={signInWithGoogle} className="btn btn-primary">Google</button>
            </div>
        </div>
        </div>
    );
};

export default Register;