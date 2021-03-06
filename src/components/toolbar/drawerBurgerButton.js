import React from 'react';
import "../../style/toolbar/drawerBurgerButton.scss";

const drawerBurgerButton = props => (
    <button className="burger-button" onClick={props.click}>
        <div className="burger-button-line" />
        <div className="burger-button-line" style={{ width: "15px" }} />
        <div className="burger-button-line" style={{ width: "10px" }} />
    </button>
);

export default drawerBurgerButton;