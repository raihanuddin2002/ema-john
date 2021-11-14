import React from 'react';
import { Link, useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirects_url = location.state?.from || "/shop";

    const handleGooggleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                history.push(redirects_url);
                // ...
            }).catch((error) => {
                const errorMessage = error.message;
                // ...
            });
    }

    return (
        <div className="container border border-black p-4 text-start my-5">
            <form>
                <div className="mb-3">
                    <h2 className="text-center text-dark fw-bold">Please Login</h2>
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-dark">Log In</button>
            </form>

            <p className="mt-2"><Link className="text-decoration-none m-1 rounded-1 text-primary fw-bold" to="/register">New User?</Link></p>

            <div>
                <h6 className="">------or------ </h6>
                <button onClick={handleGooggleSignIn} className="btn btn-primary">Google</button>
            </div>
        </div>
    );
};

export default Login;