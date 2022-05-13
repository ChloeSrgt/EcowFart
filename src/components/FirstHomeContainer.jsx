import React from 'react';
import '../styles/HomeContainers.css'
import methagif from '../assets/giphymethane.gif';

const FirstHomeContainer = () => {
    return (
        <div className="home-container">
            <img className="container-img" src={methagif} alt="gif vache qui pète" />
            <div className="text-container">
            <h3>Que se passe-t-il ?</h3>
            <h4>Saviez-vous que les vaches françaises émettent autant de gaz en un an que 15 millions de voitures ?</h4>
            <p>Et oui, l’industrie des bovins de boucherie et des vaches laitières est l’un des principaux contributeurs aux gaz à effet de serre dans le monde. L'alimentation des vaches a un grand effet sur la quantité de méthane qu’elles produisent. En effet, la digestion de certains types d’aliments produit plus de méthane que d'autres.
            </p>
            </div>
        </div>
    );
};

export default FirstHomeContainer;