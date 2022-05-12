import React from 'react';
import Slideshow from "../components/Slide";
import Intro from "../components/Intro";
import Simulateur from '../components/Simulateur';

const Home = () => {
    return (
        <div>
            <Slideshow />
            <Intro />
            <Simulateur/>
        </div>
    );
};

export default Home;