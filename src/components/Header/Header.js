import React from 'react';
import logo from '../../images/logo.png';
import "./Header.css";
import Menu from './Menu/Menu';

const Header = () => {
    return (
        <div className="header">
           <img className="logo" src={logo} alt="" srcset="" />
           <Menu></Menu>
        </div>
    );  
};

export default Header;