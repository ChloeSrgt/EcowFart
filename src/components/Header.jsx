import React from 'react';
import "../App.css";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import facebook from "../assets/fb-icon.png";
import instagram from "../assets/insta-icon.png";
import mail from "../assets/mail-icon.png";

const Header = () => {
    return (
        <header>
        <div className="header">
          <img className="header-logo" src={logo} alt="logo" />
          <h1 className="header-title">E'COWFART</h1>
          <div className="pictos">
          <img src={facebook} alt="picto facebook" />
          <img src={instagram} alt="picto instagram" />
          <img src={mail} alt="picto mail"/>
          </div>
        </div>
        </header>
    );
};

export default Header;