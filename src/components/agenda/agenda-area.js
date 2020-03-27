import React from "react";
import "../../style/agenda/agenda-area.scss";
import AgendaDayOne from "./agenda-dayone";
import AgendaDayTwo from "./agenda-daytwo";

class AgendaArea extends React.Component {

    constructor() {
        super()
        this.state = {
            showDay: true,
            showButton1: true,
            showButton2: false
        }
    }

    promeniDan1() {
        this.setState({
            showDay: !this.state.showDay,
            showButton1: true,
            showButton2: false
        });
        document.getElementById("d1").disabled = true;
        document.getElementById("d2").disabled = false;
    }

    promeniDan2() {
        this.setState({
            showDay: !this.state.showDay,
            showButton1: false,
            showButton2: true

        });
        document.getElementById("d2").disabled = true;
        document.getElementById("d1").disabled = false;
    }

    render() {
        let class1 = 'agenda-area-button1';
        let class2 = 'agenda-area-button2';
        if (this.state.showButton2) {
            class1 = "agenda-area-button1 active1";
            class2 = "agenda-area-button2 active2";
        }

        return (
            <div className="agenda-area" id="agenda">
                <div className="button-holder">
                    <button id="d1" className={class1} onClick={() => this.promeniDan1()}>Dan 1</button>
                    <button id="d2" className={class2} onClick={() => this.promeniDan2()}>Dan 2</button>
                </div>
                {
                    this.state.showDay ? <AgendaDayOne></AgendaDayOne> : <AgendaDayTwo></AgendaDayTwo>
                }
            </div>
        )
    }
}

export default AgendaArea;