import React from 'react';
import Slideshow from "../components/Slide";
import Intro from "../components/Intro";
import CompteurGaz from '../components/CompteurGaz';
import TempsPasse from "../components/TempsPasse";
import "../styles/compteurGaz.css";

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
        </div>
        </>
    );
};

export default Home;