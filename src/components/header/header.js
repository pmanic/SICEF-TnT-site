import React from 'react';
import "../../style/header/header.scss";

const header = props => (

    <div className="header" id="header">
        <img className="header-pic" src={require("../../assets/header.jpg")}></img>
        <div className="drzac">
            <div className="animated zoomIn delay-0s">
                <img className="header-logo" src={require("../../assets/logo-navbar.png")}></img>
            </div>
            <div className="animated zoomIn delay-0s">
                <h1 className="header-text">Technology 'n' Trends vol. 9</h1>
            </div>
        </div>
    </div >
)

export default header;