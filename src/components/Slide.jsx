import React from 'react'
import { Slide } from 'react-slideshow-image'
import vache1 from '../assets/vache1.jpeg'
import vache2 from '../assets/vache2.jpeg'
import vache3 from '../assets/vache3.jpeg'
import "../styles/Slide.css"
import 'react-slideshow-image/dist/styles.css'


const proprietes = {
    duration: 2500,
    transitionDuration: 1500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={vache1} alt="vache1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={vache2} alt="vache2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={vache3} alt="vache3" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;