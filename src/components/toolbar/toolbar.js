import React from 'react';
import DrawerBurgerButton from "./drawerBurgerButton";
import Link from "gatsby-link";
import "../../style/toolbar/toolbar.scss"

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div><DrawerBurgerButton click={props.drawerClickHandler} /></div>
            <div className="toolbar-background"></div>
            <div className="spacer1"></div>
            <div><a href="#header"><img className="toolbar-logo" src={require("../../assets/logo-navbar.png")} alt="logo"></img></a></div>
            <div className="spacer"></div>
            <div className="toolbar-nav-items">
                <ul>
                    <li><a href="#about">O konferenciji</a></li>
                    {/*<li><a href="#sponsors">Sponzori</a></li>*/}
                    <li><Link to="/sponsors">Sponzori</Link></li>
                    <li><a href="#lecturers">Predavači</a></li>
                    <li><a href="#agenda2">Agenda</a></li>
                    <li><a href="#gallery">Galerija</a></li>
                    <li><a href="#footer">Kontakt</a></li>
                    <li><a href="#signin">Prijavi se</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;