import React from 'react';
import Link from "gatsby-link";
import "../../style/toolbar/sideDrawer.scss";

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="#about" onClick={props.click} >O konferenciji</a></li>
                <li><Link to="/sponsors">Sponzori</Link></li>
                <li><a href="#lecturers" onClick={props.click}>Predavači</a></li>
                <li><a href="#agenda2" onClick={props.click}>Agenda</a></li>
                <li><a href="#gallery" onClick={props.click}>Galerija</a></li>
                <li><a href="#footer" onClick={props.click}>Kontakt</a></li>
                <li><a href="#signin" onClick={props.click}>Prijavi se</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;