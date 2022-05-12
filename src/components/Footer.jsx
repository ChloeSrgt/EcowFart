import React from 'react';
import "../styles/Footer.css";
import facebook from "../assets/picto-fb.png";
import instagram from "../assets/picto-insta.png";

const Footer = () => {
    return (
        <footer>
        <div>
        <div className="pictos">
          <img src={facebook} alt="picto facebook" />
          <img src={instagram} alt="picto instagram" />
          </div>
        </div>
        </footer>
    );
};

export default Footer;