import React from "react"
import "../style/style.scss"
import "../style/sponsors-page/sponsors-page-area.scss"
import ToolbarTwo from "../components/toolbar/toolbar-sponsor-page"
import SponsorsPageList from "../components/sponsors-page/sponsors-page-list"


class App extends React.Component {
    render() {
        return (
            <div className="sponsors-page-area">
                <ToolbarTwo></ToolbarTwo>
                <div className="sponsors-header">
                    <p className="naslov">Sponzori</p>
                </div>
                <div className="sponsors-page-container">
                    <SponsorsPageList></SponsorsPageList>
                </div>
            </div >



        );
    }
}

export default App;
