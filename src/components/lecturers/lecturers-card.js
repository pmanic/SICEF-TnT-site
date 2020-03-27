import React from "react"
import "../../style/lecturers/lecturers-card.scss"

class LecturersCard extends React.Component {
    render() {
        return (
            <div className="lecturers-card-wrapper">
                <div className="lecturers-card">
                    <div className="drzacSlike">
                        <img className="lecturers-card-slika" src={this.props.slika}></img>
                    </div>
                    <div className="lecturers-card-ime">{this.props.ime}</div>
                    <div className="lecturers-card-firma">{this.props.firma}</div>
                    <div className="lecturers-card-tekst">{this.props.children}</div>
                </div>
            </div>
        )
    }
}

export default LecturersCard;