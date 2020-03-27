import React from "react";
import "../../style/footer/footer-area.scss";

class FooterArea extends React.Component {
    render() {
        return (
            <div className="footer-area" id="footer">
                <div className="container">
                    <div className="footer-area-cards">
                        <div className="card">
                            <p className="card-naslov">Društvene mreže:</p>
                            <div className="card-linija"></div>
                            <div className="slike">
                                <li>
                                    <a href="https://www.facebook.com/TechnologyAndTrends/">
                                        <img alt="mreza" className="mreza" src={require("../../assets/face.png")}></img>
                                    </a>
                                    <a href="https://www.instagram.com/sicef.info/ ">
                                        <img alt="mreza" className="mreza" src={require("../../assets/insta.png")}></img>
                                    </a>
                                    <a href="https://www.linkedin.com/company/sicef/">
                                        <img alt="mreza" className="mreza" src={require("../../assets/linkedin.png")}></img>
                                    </a>
                                </li>
                            </div>
                        </div>
                        <div className="card">
                            <p className="card-naslov">Kancelarija:</p>
                            <div className="card-linija"></div>
                            <div className="drzac-slike-i-imena">
                                <img alt="spot" src={require("../../assets/spot.png")} className="icon"></img>
                                <div className="drzac-imena">
                                    <p className="tekst3">Aleksandra Medvedeva 14</p>
                                    <p className="tekst2">18 000 Niš, Srbija</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <p className="card-naslov">Kontakt:</p>
                            <div className="card-linija"></div>
                            <div className="lista-brojeva">
                                <div className="drzac-slike-i-imena">
                                    <img alt="spot" src={require("../../assets/phone.png")} className="icon"></img>
                                    <div className="drzac-imena">
                                        <p className="tekst3">Marko Ilić - predsednik</p>
                                        <p className="tekst2">+381 63 507 841</p>
                                        <p className="tekst2">marko.m.ilic@sicef.info</p>
                                    </div>
                                </div>
                                <div className="drzac-slike-i-imena">
                                    <img alt="spot" src={require("../../assets/phone.png")} className="icon"></img>
                                    <div className="drzac-imena">
                                        <p className="tekst3">Mikica Randenković - ER</p>
                                        <p className="tekst2">+381 60 7266 087</p>
                                        <p className="tekst2">mikica.radenkovic@sicef.info</p>
                                    </div>
                                </div>
                                <div className="drzac-slike-i-imena">
                                    <img alt="spot" src={require("../../assets/phone.png")} className="icon"></img>
                                    <div className="drzac-imena">
                                        <p className="tekst3">Kristijan Ilić - koordinator</p>
                                        <p className="tekst2">+381 69 1997 032</p>
                                        <p className="tekst2">kristijan.ilic@sicef.info</p>
                                    </div>
                                </div>
                                <div className="drzac-slike-i-imena">
                                    <img alt="spot" src={require("../../assets/phone.png")} className="icon"></img>
                                    <div className="drzac-imena">
                                        <p className="tekst3">Filip Nikolić - koordinator</p>
                                        <p className="tekst2">+381 62 8434 401</p>
                                        <p className="tekst2">filip.nikolic@sicef.info</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <p className="card-naslov">Poruka:</p>
                            <div className="card-linija"></div>
                            <li className="lista">
                                <img alt="spot" src={require("../../assets/mail.png")} className="icon"></img>
                                <p className="tekst">office@sicef.info</p>
                            </li>
                        </div>
                    </div>

                    <div className="footer-area-copyright">
                        <p className="copyright-tekst">Copyright 2020 © SICEF. All Rights Reserved</p>
                        <img alt="logo" src={require("../../assets/sponzori/sicef_logo.png")} className="sicef-logo"></img>
                        <div className="sponzori">
                            <img alt="logo" src={require("../../assets/sponzori/startup_nis_logo.png")} className="sponzori-logo"></img>
                            <img alt="logo" src={require("../../assets/sponzori/elfak_logo.png")} className="sponzori-logo"></img>
                            <img alt="logo" src={require("../../assets/sponzori/rcmt_logo.png")} className="sponzori-logo"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FooterArea;