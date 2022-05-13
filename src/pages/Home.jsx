import React from 'react';
import Slideshow from "../components/Slide";
import Intro from "../components/Intro";
import Simulateur from '../components/Simulateur';
import CompteurGaz from '../components/CompteurGaz';
import TempsPasse from "../components/TempsPasse";
import "../styles/compteurGaz.css";
import FirstHomeContainer from '../components/FirstHomeContainer';
import SecondHomeContainer from '../components/SecondHomeContainer';
import ArrowTop from '../components/ArrowTop';

const Home = () => {
    return (
       <> <div>
            <Slideshow />
            <div className="container">
        <button className='compteurGaz'><CompteurGaz /></button>
        <div className="blocText">
          <TempsPasse />
        </div>
        </div>
            <Intro />
            <FirstHomeContainer />
            <SecondHomeContainer />
            <Simulateur/>
            <ArrowTop />
        </div>
        </>
    );
};

export default Home;

