import React from "react";
import "../../style/about/about-area.scss";

class AboutArea extends React.Component {
    render() {
        return (
            <div className="about-area" id="about">
                <div className="about-tekst">
                    <p className="naslov">O konferenciji</p>
                    <p className="linija"></p>
                    <p className="tekst">Technology ‘n’ Trends je višednevna konferencija, organizovana kao serija predavanja i radionica o aktuelnim temama u oblasti tehnike, kroz koje bi kompanije učesnice, lideri modernih tehnologija, predstavile svoj način poslovanja i oblasti kojima se bave, a sva predavanja su otvorena za sve zainteresovane i besplatna su, uz obaveznu prijavu na dnu sajta.</p>
                </div>
            </div>
        )
    }
}

export default AboutArea;