import React from 'react';
import "../styles/Header.css";
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <div>
          <img alt="logo" src={logo} />
        </div>
    );
};

export default Header;