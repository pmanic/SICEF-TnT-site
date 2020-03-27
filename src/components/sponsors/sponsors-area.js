import React from "react";
import SimpleSlider from "./slider";
import Link from "gatsby-link";
import "../../style/sponsors/sponsors-area.scss";



class SponsorsArea extends React.Component {
    render() {
        return (
            <div className="sponsors-area" id="sponsors">
                <p className="sponsors-naslov">Sponzori</p>
                <p className="linija"></p>
                <SimpleSlider></SimpleSlider>
                <div className="animated fadeIn delay-0s">
                    <Link to="/sponsors" className="aa"><button className="sponsors-dugme">Saznaj više</button></Link>
                </div>
            </div>
        )
    }
}

export default SponsorsArea;