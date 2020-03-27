import React from 'react'
import Gallery from "./gallery"
import "../../style/gallery/gallery-area.scss"


const GalleryArea = () => (
    <div className="gallery-area" id="gallery">
        <p className="gallery-area-naslov">Galerija</p>
        <p className="linija"></p>
        <Gallery></Gallery>
    </div>
);

export default GalleryArea;