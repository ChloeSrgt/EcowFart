import React from 'react';
import '../styles/HomeContainers.css'
import methagif from '../assets/giphymethane.gif';

const FirstHomeContainer = () => {
    return (
        <div className="home-container">
            <img className="container-img" src={methagif} alt="gif vache qui pète" />
            <div className="text-container">
            <h3>Abbohgdoirhjdiohj</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa fugiat adipisci, velit nihil repudiandae incidunt iste cupiditate mollitia sapiente corporis voluptatibus consequatur, debitis repellat error eveniet ratione harum provident assumenda.</p>
            </div>
        </div>
    );
};

export default FirstHomeContainer;