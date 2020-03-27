import React from "react"
import Toolbar from "../components/toolbar/toolbar"
import SideDrawer from "../components/toolbar/sideDrawer"
import Backdrop from "../components/toolbar/backdrop"
import Header from "../components/header/header"
import CounterArea from "../components/counter/counter-area"
import AboutArea from "../components/about/about-area"
import LecturersArea from "../components/lecturers/lecturers-area"
import GalleryArea from "../components/gallery/gallery-area"
import SponsorsArea from "../components/sponsors/sponsors-area"
import SignIn from "../components/signin/signin-area"
import FooterArea from "../components/footer/footer-area"
import AgendaArea from "../components/agenda/agenda-area"
import "../style/style.scss"

class App extends React.Component {

    state = {
        sideDrawerOpen: false
    };

    drawerBurgerClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        return (
            <div style={{ height: '100%' }}>
                <Toolbar drawerClickHandler={this.drawerBurgerClickHandler}></Toolbar>
                <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler} />
                {backdrop}
                <Header></Header>
                <CounterArea></CounterArea>
                <AboutArea></AboutArea>
                <SponsorsArea></SponsorsArea>
                <LecturersArea></LecturersArea>
                <AgendaArea></AgendaArea>
                <GalleryArea></GalleryArea>
                <SignIn></SignIn>
                <FooterArea></FooterArea>
            </div >



        );
    }
}

export default App;
