import React from 'react';
import "../styles/HomeContainers.css";
import cowtongue from "../assets/vache-container.jpg";

const SecondHomeContainer = () => {
    return (
        <div className="home-container">
            <div className="text-container">
            <h3>Des alternatives ?</h3>
            <p>Absolument ! Le lin, par exemple, permet de réduire de 20 % les rejets de méthane des bovins. En diminuant les aliments riches en glucides, comme le maîs et le soja, il est possible pour les éleveurs de contribuer à aider notre planète !  </p> 
            </div> 
            <img className="container-img" src={cowtongue} alt="gif vache qui pète" />
        </div>
    );
};

export default SecondHomeContainer;