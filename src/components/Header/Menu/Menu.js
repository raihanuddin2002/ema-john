import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import "./Menu.css";

const Menu = () => {
    const {user,logOut} = useFirebase();
    return (
        <div>
            <nav>
                <ul className="menu">
                    <li><NavLink className="nav-link text-white" to="/shop">Shop</NavLink></li>
                    <li><NavLink className="nav-link text-white" to="/order-review">Order Review</NavLink></li>
                    <li><NavLink className="nav-link text-white" to="/inventory">Manage Inventory</NavLink></li>
                     <li><NavLink className="nav-link text-white" to="/register">Register</NavLink></li>
                    { user.email? <li><div onClick={logOut} className="nav-link bg-none border-none text-white">Log Out</div></li> : <li><NavLink className="nav-link text-white" to="/login">Log In</NavLink></li> }
                    {user.email && <span><div className="p-3 fw-bold text-warning fs-5">{user.displayName}</div></span>}
                </ul>
            </nav>
        </div>
    );
};

export default Menu;