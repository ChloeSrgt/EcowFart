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
        to="/"><h1 className="header-title">E'COWFART</h1>
        </Link>
        <Link
         to="/contact"> <img className="pictomail" src={mail} alt="picto mail"/>
          </Link>
        </div>
        </header>
    );
};

export default Header;