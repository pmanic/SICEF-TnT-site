import React from 'react';
//import DrawerBurgerButton from "./drawerBurgerButton";
import Link from "gatsby-link";
import "../../style/toolbar/toolbar-sponsors-page.scss";

const ToolbarTwo = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div><Link to="/" ><img className="back" src={require("../../assets/back.png")} alt="logo"></img></Link></div>
            <div className="toolbar-background"></div>
            <div className="spacer2"></div>
            <div><a href="#header"><img className="toolbar-logo2" src={require("../../assets/logo-navbar.png")} alt="logo"></img></a></div>
            <div className="spacer"></div>
        </nav>
    </header>
);

export default ToolbarTwo;