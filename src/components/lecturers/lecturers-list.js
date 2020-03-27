import React from "react"
import "../../style/lecturers/lecturers-list.scss"
import LecturersCard from "./lecturers-card"

class LecturersList extends React.Component {
    render() {
        return (
            <div className="lecturers-list">
                <div className="lecturers-list-row">
                    <LecturersCard slika={require("../../assets/predavaci/predavac1.png")} ime="Dušan Kovačević" firma="Elfak">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</LecturersCard>
                    <LecturersCard slika={require("../../assets/predavaci/predavac2.jpg")} ime="Petar Manić" firma="Elfak">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</LecturersCard>
                </div>
                <div className="lecturers-list-row">
                    <LecturersCard slika={require("../../assets/predavaci/predavac3.jpg")} ime="Marko Ilić" firma="Elfak">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</LecturersCard>
                    <LecturersCard slika={require("../../assets/predavaci/predavac4.jpg")} ime="Jovan Kostić" firma="Elfak">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</LecturersCard>
                </div>
            </div>
        )
    }
}

export default LecturersList;