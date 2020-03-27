import React from 'react';
import Slider from 'infinite-react-carousel';
import "../../style/sponsors/slider.scss";

class SimpleSlider extends React.Component {

    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 500,
            centerPadding: 10,
            duration: 1500,
            overScan: 3,
            slidesToShow: 3,
            wheel: true,
            arrows: false
        };

        return (
            <div className="slider">
                <Slider {...settings}>
                    <div className="slika-container">
                        <a href="https://www.startupcentarnis.org">
                            <img className="slika" alt="sponzor " src={require("../../assets/sponzori/startup_nis_logo.png")}></img></a>
                    </div >
                    <div className="slika-container">
                        <a href="https://www.elfak.ni.ac.rs">
                            <img className="slika" alt="sponzor " src={require("../../assets/sponzori/elfak_logo.png")}></img></a>
                    </div>
                    <div className="slika-container">
                        <a href="http://www.sicef.info">
                            <img className="slika" alt="sponzor " src={require("../../assets/sponzori/sicef_logo.png")}></img></a>
                    </div>
                    <div className="slika-container">
                        <a href="https://www.rcmtiteurope.com">
                            <img className="slika" alt="sponzor " src={require("../../assets/sponzori/rcmt_logo.png")}></img></a>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default SimpleSlider;

