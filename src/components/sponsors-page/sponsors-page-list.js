import React, { Component } from 'react';
import "../../style/sponsors-page/sponsors-page-list.scss";
import SponsorsPageCard from "./sponsors-page-card";

class SponsorsPageList extends Component {
    render() {
        return (
            <div className="sponsors-page-list">
                <p className="naslov">Platinum</p>
                <div className="drzacdiva">
                    <SponsorsPageCard
                        slika1={require("../../assets/platinum.png")}
                        slika2={require("../../assets/sponzori/startup_nis_logo.png")}
                        tekst={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"}
                    ></SponsorsPageCard>
                    <SponsorsPageCard
                        slika1={require("../../assets/platinum.png")}
                        slika2={require("../../assets/sponzori/startup_nis_logo.png")}
                        tekst={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"}
                    ></SponsorsPageCard>
                </div>
                <p className="naslov">Gold</p>
                <div className="drzacdiva">
                    <SponsorsPageCard
                        slika1={require("../../assets/gold.png")}
                        slika2={require("../../assets/sponzori/startup_nis_logo.png")}
                        tekst={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"}
                    ></SponsorsPageCard>
                </div>
                <p className="naslov">Silver</p>
                <div className="drzacdiva">
                    <SponsorsPageCard
                        slika1={require("../../assets/silver.png")}
                        slika2={require("../../assets/sponzori/startup_nis_logo.png")}
                        tekst={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"}
                    ></SponsorsPageCard>
                </div>
                <p className="naslov">Bronze</p>
                <div className="drzacdiva">
                    <SponsorsPageCard
                        slika1={require("../../assets/bronze.png")}
                        slika2={require("../../assets/sponzori/rcmt_logo.png")}
                        tekst={"Startup Center Nis is an incubator for young people’s ideas and business ventures. We offer support to entrepreneurial spirit and the development of creativity among students, as well as innovative start-up companies in the field of science and advanced technologies on their path to maturity."}
                    ></SponsorsPageCard>
                </div>
                {/*<p className="naslov">Robna podrška</p>
                <div className="drzacdiva">
                    <SponsorsPageCard
                        slika1={require("../../assets/robni.png")}
                        slika2={require("../../assets/sponzori/startup_nis_logo.png.png")}
                        tekst={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"}
                    ></SponsorsPageCard>
        </div>*/}
                <p className="naslov">Podrška</p>
                <div className="drzacdiva">
                    <SponsorsPageCard
                        slika1={require("../../assets/partneri.png")}
                        slika2={require("../../assets/sponzori/startup_nis_logo.png")}
                        tekst={"Startup Center Nis is an incubator for young people’s ideas and business ventures. We offer support to entrepreneurial spirit and the development of creativity among students, as well as innovative start-up companies in the field of science and advanced technologies on their path to maturity."}
                    ></SponsorsPageCard>
                    <SponsorsPageCard
                        slika1={require("../../assets/partneri.png")}
                        slika2={require("../../assets/sponzori/elfak_logo.png")}
                        tekst={"Otpočeo sa radom 1. oktobra 1960. godine kao Elektronski odsek Tehničkog fakulteta u Nišu, koji je tada bio u sastavu Univerziteta u Beogradu.U početku je nastava izvođena u okviru „Zavoda RR“ (kasnije Elektronska industrija) da bi od 1964. godine otpočela nastava u zgradi Tehničkog fakulteta. Godine 1965, formira se Univerzitet u Nišu i Tehnički fakultet postaje sastavni deo Niškog univerziteta. Od 1968. godine Elektronski odsek prerasta u fakultet i počinje da radi samostalno kao Elektronski fakultet u Nišu."}

                    ></SponsorsPageCard>
                </div>
            </div>
        );
    }
}

export default SponsorsPageList;