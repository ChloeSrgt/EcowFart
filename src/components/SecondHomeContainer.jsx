import React from 'react';
import "../styles/HomeContainers.css";
import cowtongue from "../assets/vache-container.jpg";

const SecondHomeContainer = () => {
    return (
        <div className="home-container">
            <div className="text-container">
            <h3>Abbohgdoirhjdiohj</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa fugiat adipisci, velit nihil repudiandae incidunt iste cupiditate mollitia sapiente corporis voluptatibus consequatur, debitis repellat error eveniet ratione harum provident assumenda.</p> 
            </div> 
            <img className="container-img" src={cowtongue} alt="gif vache qui pète" />
        </div>
    );
};

export default SecondHomeContainer;