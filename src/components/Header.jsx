import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import mail from "../assets/picto-contact.png";

const Header = () => {
    return (
        <header>
        <div className="header">
        <Link
        to="/"> <img className="header-logo" src={logo} alt="logo" />
        </Link>
        <Link
        to="/"><h1 className="header-title">E'COWFART</h1></Link>
          <div className="pictos">
          <img src={mail} alt="picto mail"/>
        </div>
        </div>
        </header>
    );
};

export default Header;