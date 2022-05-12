import React from 'react';
import "../App.css";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import mail from "../assets/picto-contact.png";

const Header = () => {
    return (
        <header>
        <div className="header">
          <img className="header-logo" src={logo} alt="logo" />
          <h1 className="header-title">E'COWFART</h1>
          <img src={mail} alt="picto mail"/>
        </div>
        </header>
    );
};

export default Header;