import React from 'react'
import LecturersList from "./lecturers-list"
import "../../style/lecturers/lecturers-area.scss"

const LecturersArea = () => (
    <div className="lecturers-area" id="lecturers">
        <p className="lecturers-area-naslov">Predavači</p>
        <p className="linija"></p>
        <LecturersList></LecturersList>
        <div id="agenda1"></div>
        <div id="agenda2"></div>
    </div>
);

export default LecturersArea;