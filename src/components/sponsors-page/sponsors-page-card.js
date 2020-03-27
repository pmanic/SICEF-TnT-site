import React, { Component } from 'react';
import "../../style/sponsors-page/sponsors-page-card.scss";

class SponsorsPageCard extends Component {
    render() {
        return (
            <div className="sponsors-page-card">
                <div className="drzac-slike-1">
                    <img className="slika-tip-sponzora" src={this.props.slika1}></img>
                </div>
                <div className="drzac-slike-2">
                    <img className="slika-logo" src={this.props.slika2}></img>
                </div>
                <div className="drzac-teksta">
                    <p className="tekst">{this.props.tekst}</p>
                </div>
            </div>
        );
    }
}

export default SponsorsPageCard;